import { Outlet as AppOutlet } from "react-router-dom";
import { MuiThemeProvider, ReactQueryClientProvider, SnackbarProvider } from "~/providers";
import { Header } from "./components/Header";
import { Box } from "@mui/material";

export const AppComponent = () => {
  return (
    <MuiThemeProvider>
      <SnackbarProvider>
        <ReactQueryClientProvider>
          <Box>
            <Header />
            <AppOutlet />
          </Box>
        </ReactQueryClientProvider>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
};
