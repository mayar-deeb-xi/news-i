import { Outlet as AppOutlet } from "react-router-dom";
import { MuiThemeProvider, ReactQueryClientProvider, SnackbarProvider, MuiLocalizationProvider } from "~/providers";
import { Header } from "./components/Header";
import { Box } from "@mui/material";
import './index.css'

export const AppComponent = () => {
  return (
    <MuiThemeProvider>
      <MuiLocalizationProvider>
        <SnackbarProvider>
          <ReactQueryClientProvider>
            <Box>
              <Header />
              <AppOutlet />
            </Box>
          </ReactQueryClientProvider>
        </SnackbarProvider>
      </MuiLocalizationProvider>
    </MuiThemeProvider>
  );
};
