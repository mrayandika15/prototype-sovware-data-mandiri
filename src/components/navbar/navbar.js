import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = ({ sidebarState }) => {
  const { isActive, setIsActive } = sidebarState;

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "white",
        pl: isActive ? "250px" : "60px",
      }}
    >
      <Toolbar>
        <Typography sx={{ color: "black", fontWeight: 600 }}>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
