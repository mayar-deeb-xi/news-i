import { Route, Routes, Navigate } from "react-router-dom";
import { TasksComponent } from "./TasksComponent";
import { TaskCreatePage } from "./TaskCreatePage";
import { TaskUpdatePage } from "./TaskUpdatePage";

const TasksRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<TasksComponent />}>
        <Route path={`/create`} element={<TaskCreatePage />} />
        <Route path={`/update/:id`} element={<TaskUpdatePage />} />
        <Route path={`/`} element={<Navigate to="/not-found" />} />
        <Route path={`/*`} element={<Navigate to="/not-found" />} />
      </Route>
    </Routes>
  );
};

export default TasksRouting;
