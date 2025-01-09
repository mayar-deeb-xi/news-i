import { Outlet as AppOutlet } from "react-router-dom";
import { MuiThemeProvider, ReactQueryClientProvider } from "~/providers";

export const AppComponent = () => {
  return (
    <MuiThemeProvider>
      <ReactQueryClientProvider>
        <AppOutlet />
      </ReactQueryClientProvider>
    </MuiThemeProvider>
  );
};
