import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ControlledTextField } from "~/components/ControlledTextField";
import { Task, useTasksStore } from "~/store/tasksStore";
import { enqueueSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().required().label("Task Name"),
  })
  .required();

export type Form = yup.InferType<typeof schema>;

export const _TaskUpdatePage = ({ task }: { task: Task }) => {
  const navigate = useNavigate();
  const updateTask = useTasksStore((state) => state.updateTask);
  const removeTask = useTasksStore((state) => state.removeTask);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: task.name,
    },
  });

  const onSubmit = (data: Form) => {
    updateTask(task.id, { name: data.name });
    enqueueSnackbar("Task was updated successfully", { variant: "success" });
    navigate("/");
  };

  const onRemove = () => {
    removeTask(task.id);
    navigate("/");
    enqueueSnackbar("Task was deleted successfully", { variant: "success" });
  };

  return (
    <Box
      sx={{
        p: 3,
        minHeight: "100vh",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <FormControl error={!!errors.name?.message}>
          <FormLabel htmlFor="task-name-label">Task Name</FormLabel>
          <ControlledTextField
            controllerProps={{
              control,
              name: "name",
            }}
            name="task-name-label"
          />
        </FormControl>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" color="error" onClick={() => onRemove()}>
            Delete
          </Button>
          <Button
            variant="contained"
            sx={{ flex: 1 }}
            onClick={() => handleSubmit(onSubmit)()}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export const TaskUpdatePage = () => {
  const { id } = useParams();
  const tasks = useTasksStore((state) => state.tasks);
  const task = tasks.find((el) => el.id === id);

  if (!task) return <>not found</>;

  return <_TaskUpdatePage key={id} task={task} />;
};
