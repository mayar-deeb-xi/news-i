import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { HomePage } from "~/pages/home/HomePage"
import { AppErrorBoundary } from "~/error-boundary/AppErrorBoundary";
import { AppComponent } from "./AppComponent";


export const router = createBrowserRouter(createRoutesFromElements(
  <Route errorElement={<AppErrorBoundary />} element={<AppComponent />}>
    <Route
      path={`/`}
      element={<HomePage />}
    />
  </Route>
));

const AppRouting = () => {

  return <RouterProvider router={router} />;
};


export default AppRouting;