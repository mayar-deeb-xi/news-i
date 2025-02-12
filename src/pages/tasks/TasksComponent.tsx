import { Outlet as TasksOutlet } from "react-router-dom";
import { TasksLayout } from "~/components/TasksLayout";

export const TasksComponent = () => {
  return (
    <TasksLayout>
      <TasksOutlet />
    </TasksLayout>
  );
};
