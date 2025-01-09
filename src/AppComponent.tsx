import { Outlet as AppOutlet } from "react-router-dom";
import { MuiThemeProvider } from "./providers/MuiThemeProvider";

export const AppComponent = () => {
  return (
    <MuiThemeProvider>

      <AppOutlet />

    </MuiThemeProvider>
  );
};
