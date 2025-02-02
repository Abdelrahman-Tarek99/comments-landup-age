import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/navbar/Navbar";
import { appRoutes } from "@/common/routing";

export const Layout = () => {
  return (
    <>
      <Navbar routes={appRoutes} />
      <Outlet />
    </>
  );
};
