import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "~/theme";

export const MuiThemeProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
