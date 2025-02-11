import {
  AboutUs,
  Comment,
  LeaveAComment,
  ContactUs,
  Home,
} from "@/common/screens";
import { createBrowserRouter } from "react-router-dom";
import { appRoutes } from "./AppRoutes";
import { Layout } from "../wrappers/Layout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: appRoutes.home,
        element: <Home />,
      },
      {
        path: appRoutes.about,
        element: <AboutUs />,
      },
      {
        path: appRoutes.contact,
        element: <ContactUs />,
      },
      {
        path: appRoutes["leave a comment"],
        element: <LeaveAComment />,
      },
      {
        path: appRoutes.comment,
        element: <Comment />,
      },
    ],
  },
]);
