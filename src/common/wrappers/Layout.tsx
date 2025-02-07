import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/navbar/Navbar";
import { appRoutes } from "@/common/routing";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800 ">
      <Navbar routes={appRoutes} />
      <main className="flex-1 flex flex-col relative  overflow-auto ">
        <Outlet />
      </main>
    </div>
  );
};
