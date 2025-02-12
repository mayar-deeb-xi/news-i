import { Outlet as AppOutlet } from "react-router-dom";
import { MuiThemeProvider, ReactQueryClientProvider, SnackbarProvider, MuiLocalizationProvider } from "~/providers";
import { AppLayout } from "./components/AppLayout";
import './index.css'

export const AppComponent = () => {
  return (
    <MuiThemeProvider>
      <MuiLocalizationProvider>
        <SnackbarProvider>
          <ReactQueryClientProvider>
            <AppLayout>
              <AppOutlet />
            </AppLayout>
          </ReactQueryClientProvider>
        </SnackbarProvider>
      </MuiLocalizationProvider>
    </MuiThemeProvider>
  );
};
