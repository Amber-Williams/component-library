import { useTheme } from "@mui/material";
import AppThemeProvider from "./AppThemeProvider";

const Theme = {
  Provider: AppThemeProvider,
  useTheme: useTheme as typeof useTheme,
};

export default Theme;
