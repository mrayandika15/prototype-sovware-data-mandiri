import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: "white" }}>
      <Toolbar>
        <Typography sx={{ color: "black", fontWeight: 600 }}>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
