import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { drawerWidth } from "~/components/AppLayout";
import { Toolbar } from "@mui/material";
import { getPageTitle } from "~/helpers";

export const TasksLayout = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: (t) => t.palette.primary.main,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Typography textAlign="center" variant="h6" noWrap component="div">
            {getPageTitle(location.pathname)}
          </Typography>
        </Toolbar>
      </AppBar>

      {children}
    </>
  );
};
