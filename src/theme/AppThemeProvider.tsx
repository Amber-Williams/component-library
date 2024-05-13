import { PaletteMode } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import * as React from "react";

import _theme from "./theme.json";

type Props = {
  children?: React.ReactNode;
  mode: "light" | "dark";
};

declare module "@mui/material/styles" {
  interface ZIndex {
    surface: number;
  }
}

export default ({ children, mode }: Props) => {
  const theme = responsiveFontSizes(
    createTheme({
      components: {
        MuiButtonBase: {
          defaultProps: {
            disableRipple: true,
          },
        },
      },
      shape: _theme.shape,
      palette: {
        mode: mode as PaletteMode,
        primary: {
          main: _theme.schemes[mode].primary,
        },
        secondary: {
          main: _theme.schemes[mode].secondary,
        },
        background: {
          default: _theme.schemes[mode].surface,
          paper: _theme.schemes[mode].surface,
        },
        error: {
          main: _theme.schemes[mode].error,
        },
        text: {
          primary: _theme.schemes[mode].onSurface,
          secondary: _theme.schemes[mode].onSurfaceVariant,
        },
        grey: {
          50: mode === "dark" ? "hsl(0, 2.6%, 10%)" : "hsl(0, 5%, 95%)",
          100: mode === "dark" ? "hsl(0, 2.6%, 20%)" : "hsl(0, 2.6%, 90%)",
          200: mode === "dark" ? "hsl(0, 2.6%, 30%)" : "hsl(0, 2.6%, 80%)",
          300: mode === "dark" ? "hsl(0, 2.6%, 40%)" : "hsl(0, 2.6%, 70%)",
          400: mode === "dark" ? "hsl(0, 2.6%, 50%)" : "hsl(0, 2.6%, 60%)",
          500: mode === "dark" ? "hsl(0, 2.6%, 60%)" : "hsl(0, 2.6%, 50%)",
          600: mode === "dark" ? "hsl(0, 2.6%, 70%)" : "hsl(0, 2.6%, 40%)",
          700: mode === "dark" ? "hsl(0, 2.6%, 80%)" : "hsl(0, 2.6%, 30%)",
          800: mode === "dark" ? "hsl(0, 2.6%, 90%)" : "hsl(0, 2.6%, 20%)",
          900: mode === "dark" ? "hsl(0, 5%, 95%)" : "hsl(0, 2.6%, 10%)",
        },
      },
      zIndex: {
        surface: -1,
      },
    })
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
