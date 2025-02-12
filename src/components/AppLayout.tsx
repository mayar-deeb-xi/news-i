import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { Button, Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useLocation, useNavigate } from "react-router-dom";
import { useTasksStore } from "~/store/tasksStore";

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const drawerWidth = 240;

export const AppLayout = ({ children }: { children: JSX.Element }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setMobileOpen(false);
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
          onClick={() => navigate("tasks/create")}
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            bottom: 20,
            right: 20,
            borderRadius: "100%",
            py: 2,
            zoom: 0.9,
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
        lklk
      </Toolbar>
      <Toolbar
        sx={{
          backgroundColor: (t) => t.palette.success.dark,
        }}
      >
        lklk
      </Toolbar>
      <Divider />
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <Checkbox
              color="success"
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
              checked={task.done}
              onChange={() => updateTask(task.id, { done: !task.done })}
            />
            <ListItemText primary={task.name} />

            <Button onClick={() => navigate(`/tasks/update/${task.id}`)}>
              Edit
            </Button>
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
              width: drawerWidth,
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
