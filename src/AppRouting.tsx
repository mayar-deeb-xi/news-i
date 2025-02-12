import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { HomePage } from "~/pages/home/HomePage"
import { AppErrorBoundary } from "~/error-boundary/AppErrorBoundary";
import { AppComponent } from "./AppComponent";
import TasksRouting from "./pages/tasks/TasksRouting";


export const router = createBrowserRouter(createRoutesFromElements(
  <Route errorElement={<AppErrorBoundary />} element={<AppComponent />}>
    <Route
      path={`/`}
      element={<HomePage />}
    />
    <Route
      path={`tasks/*`}
      element={<TasksRouting />}
    />
  </Route>
));

const AppRouting = () => {

  return <RouterProvider router={router} />;
};


export default AppRouting;