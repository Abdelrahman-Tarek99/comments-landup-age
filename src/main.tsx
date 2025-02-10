import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "@/common/routing";
import { store } from "../store";
import { Provider } from 'react-redux';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
