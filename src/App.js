import { Link, RouterProvider } from "react-router-dom";
import Routes from "./routes";
import { Box, Container, CssBaseline } from "@mui/material";
import Sidebar from "./components/sidebar/sidebar";
import DashboardLayout from "./layouts/dashboard-layout";

function App() {
  return (
    <>
      <CssBaseline />
      <DashboardLayout>
        <Routes />
      </DashboardLayout>
    </>
  );
}

export default App;
