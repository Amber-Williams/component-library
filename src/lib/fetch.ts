interface IRetrySettings {
  delaySeconds: number;
  retries: number;
}

const defaultOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const wait = (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

const _fetch = async <T>({
  url,
  options,
  settings,
}: {
  url: string;
  options?: RequestInit | undefined;
  settings?: {
    shouldCache?: boolean;
    retry?: IRetrySettings;
  };
}): Promise<{
  data: T | null;
  error: Error | null | true;
}> => {
  try {
    const cachedData = settings?.shouldCache
      ? sessionStorage.getItem(url)
      : false;

    if (cachedData) {
      return JSON.parse(cachedData);
    }
    let _options = structuredClone(options);
    const _defaultOptions = structuredClone(defaultOptions);
    _options = Object.assign(_defaultOptions, _options);

    const res = await fetch(url, _options);
    const response = await res.json();
    if (res.status >= 400 && res.status < 600) {
      return { data: response, error: true };
    }
    return { data: response, error: null };
  } catch (error) {
    if (settings?.retry?.retries) {
      const _settings = structuredClone(settings);
      (_settings.retry as IRetrySettings).retries -= 1;
      await wait((_settings.retry as IRetrySettings).delaySeconds);
      return _fetch({ url, options, settings: _settings });
    }

    return { data: null, error: error as Error };
  }
};

export default _fetch;
