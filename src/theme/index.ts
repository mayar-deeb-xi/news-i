import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
  palette: {
    mode: "light",
    background: {
      default: "#f3f3f3",
      paper: "#f3f3f3",
    },
    primary: {
      main: "#3556AB",
    },
    success: {
      main: "#53DA69",
      dark: "#CDE53D",
    },
    error: {
      main: "#AB3535",
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: 123,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 123,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "black",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "19.44px",
          letterSpacing: "11.5%",
          marginTop: 7,
          marginBottom: 10,
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white",
              color: "#0D2972",
              "& fieldset": {
                borderRadius: 8,
                borderWidth: 2,
              },
            },
          },
        },
      ],
    },

    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            borderRadius: 7,
            borderWidth: "2px",
            borderColor: "#0D2972",
            borderStyle: "solid",
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderRadius: 4,
            borderWidth: "1.5px",
            borderColor: "#0D2972",
            borderStyle: "solid",
            fontWeight: "bold",
            color: "#0D2972",
          },
        },
        {
          props: { variant: "contained", color: "error" },
          style: {
            borderRadius: 7,
            borderWidth: "2px",
            borderColor: "#720D0D",
            borderStyle: "solid",
          },
        },
        {
          props: { variant: "contained" },
          style: {
            paddingTop: 16,
            paddingBottom: 16,
          },
        },
      ],
    },
  },
});
