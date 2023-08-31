import * as React from "react";
import { useRoutes } from "react-router-dom";
import MonitorPage from "../pages/monitor-page";
import DesignPage from "../pages/design-page";

const Routes = () => {
  let element = [
    {
      path: "/",
      element: <MonitorPage />,
    },
    { path: "/design", element: <DesignPage /> },
  ];

  return useRoutes(element);
};

export default Routes;
