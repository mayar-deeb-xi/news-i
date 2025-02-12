import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";

export const AppErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "98vh",
      }}
    >
      <Box>
        <Typography variant="h4" color="textPrimary">
          We can’t get this page
        </Typography>
        <Typography
          variant="body1"
          style={{ marginTop: "1rem" }}
          color="textSecondary"
        >
          Sorry, the page you are looking for doesn't work or has been moved.
          <br />
          Please, try again or contact us for more info.
        </Typography>
        <Typography style={{ marginTop: "1rem", color: "#F56565" }}>
          {error?.status} {error?.statusText}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "1.5rem",
            gap: "0.75rem",
          }}
        >
          <Button
            sx={{
              textTransform: "capitalize",
            }}
            onClick={() => {
              window.location.reload();
            }}
            variant="contained"
          >
            try again
          </Button>
          <Button
            sx={{
              textTransform: "capitalize",
            }}
            onClick={() => {
              navigate("/");
            }}
            variant="contained"
          >
            go home
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
