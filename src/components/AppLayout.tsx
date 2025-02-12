import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Button, Checkbox, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useLocation, useNavigate } from "react-router-dom";
import { useTasksStore } from "~/store/tasksStore";

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MenuIcon from "@mui/icons-material/Menu";
export const drawerWidth = 410;

export const AppLayout = ({ children }: { children: JSX.Element }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const tasks = useTasksStore((state) => state.tasks);
  const updateTask = useTasksStore((state) => state.updateTask);

  const drawer = (
    <div
      style={{
        flex: 1,
        position: "relative",
      }}
    >
      {location.pathname !== "/tasks/create" && (
        <Button
          onClick={() => {
            navigate("tasks/create");
            handleDrawerClose();
          }}
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            bottom: 20,
            right: 20,
            borderRadius: "100%",
            py: 2,
            zoom: 0.9,
            border: "none",
          }}
        >
          <AddIcon fontSize="large" />
        </Button>
      )}

      <Toolbar
        sx={{
          backgroundColor: (t) => t.palette.primary.main,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Box sx={{ ml: 3, color: "white" }}>
          <Typography>Hi, John</Typography>
          <Typography variant="h5" sx={{ fontWeight: "thin" }}>
            What are your plans for today?
          </Typography>
        </Box>
      </Toolbar>
      <Toolbar
        sx={{
          backgroundColor: (t) => t.palette.success.dark,
          position: "relative",
        }}
      >
        <img src="/image.png" width={53} height={40}></img>

        <Typography
          sx={{ ml: 2 }}
          variant="h6"
          fontWeight="bold"
          color="#071D55"
        >
          Go Pro Upgrade Now
        </Typography>

        <Box
          sx={{
            backgroundColor: "#071D55",
            position: "absolute",
            width: 66,
            height: 71,
            top: 0,
            right: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            opacity: mobileOpen ? 0.5 : 1,
          }}
        >
          <Typography color="#F2C94C">$1</Typography>
        </Box>
      </Toolbar>
      <Divider />
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} sx={{}}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flex: 1,
                alignItems: "center",
                backgroundColor: "white",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)",
                py: 2,
                px: 2,
                borderRadius: 2,
              }}
            >
              <Checkbox
                color="success"
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon />}
                checked={task.done}
                size="large"
                onChange={() => updateTask(task.id, { done: !task.done })}
              />
              <ListItemText
                sx={{
                  ...(task.done && { textDecoration: "line-through" }),

                  color: task.done ? "#8D8D8D" : "#071D55",
                }}
                primary={task.name}
              />

              <Button
                variant="outlined"
                onClick={() => {
                  navigate(`/tasks/update/${task.id}`);
                  handleDrawerClose();
                }}
              >
                Edit
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Button
          sx={{
            position: "fixed",
            top: 8,
            left: 8,
            zIndex: (t) => t.zIndex.appBar + 1,
            px: 1,
            minWidth: 0,
            border: "none",
            boxShadow: "none",
          }}
          variant="contained"
          onClick={() => {
            handleDrawerOpen();
          }}
        >
          <MenuIcon />
        </Button>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth - 100,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderWidth: 0,
              boxShadow: 6,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {children}
    </Box>
  );
};
