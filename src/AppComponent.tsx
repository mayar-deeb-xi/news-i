import { Outlet as AppOutlet } from "react-router-dom";
import {
  MuiThemeProvider,
  SnackbarProvider,
  MuiLocalizationProvider,
} from "~/providers";
import { AppLayout } from "./components/AppLayout";
import "./index.css";

export const AppComponent = () => {
  return (
    <MuiThemeProvider>
      <MuiLocalizationProvider>
        <SnackbarProvider>
          <AppLayout>
            <AppOutlet />
          </AppLayout>
        </SnackbarProvider>
      </MuiLocalizationProvider>
    </MuiThemeProvider>
  );
};
