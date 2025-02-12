import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#0D2972",
            light: "#3556AB"
        },
        success: {
            main: "#53DA69",
            dark: '#9EB031'
        }
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});


