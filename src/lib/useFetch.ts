import { useEffect, useState } from "react";

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

export const useFetch = <T>({
  url,
  options,
  settings,
}: {
  url: string;
  options?: RequestInit | undefined;
  settings?: {
    shouldCache?: boolean;
    shouldAbortOnUnmount?: boolean;
    retry?: IRetrySettings;
  };
}): {
  data: T | null;
  error: Error | null | unknown;
  isLoading: boolean;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [localSettings, setLocalSettings] = useState(settings);
  const controller = new AbortController();
  const signal = controller.signal;

  const fetchData = async (): Promise<void> => {
    setIsLoading(true);
    const cachedData = localSettings?.shouldCache
      ? sessionStorage.getItem(url)
      : false;

    if (cachedData) {
      setData(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      try {
        const _options = Object.assign(defaultOptions, options);
        _options.signal = signal;
        const res = await fetch(url, _options);
        if (!res.ok) {
          throw res;
        }
        const response = await res.json();

        if (localSettings?.shouldCache) {
          sessionStorage.setItem(url, JSON.stringify(response));
        }

        setData(response);
      } catch (error) {
        if (localSettings && localSettings?.retry?.retries) {
          await setLocalSettings({
            // react set state is async so await is needed here
            ...localSettings,
            retry: {
              ...localSettings.retry,
              retries: localSettings.retry.retries - 1,
            },
          });
          await wait(localSettings.retry.delaySeconds);
          return fetchData();
        }

        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      if (settings?.shouldAbortOnUnmount) {
        controller.abort();
      }
    };
  }, [url]);

  return { data, error, isLoading };
};
