import { Navigate } from "react-router-dom";

export interface HomePageProps {}

export const HomePage = () => {
  return <Navigate to={"/tasks/create"} />;
};
