import { Box, Toolbar } from "@mui/material";
import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";

const DashboardLayout = ({ children }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar state={{ isActive, setIsActive }} />
      <Box
        sx={{
          width: `calc(100% - ${isActive ? "255px" : "66px"})`,

          height: "100%",
        }}
      >
        <Navbar />
        <Box sx={{ p: "20px", background: "#CBD5FA38", height: "100vh" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
