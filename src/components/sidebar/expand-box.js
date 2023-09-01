import { Box } from "@mui/material";
import React from "react";

const ExpandBox = ({ children, isActive }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "10px",
        pl: isActive ? "10px" : "0px",
        justifyContent: isActive ? "flex-start" : "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default ExpandBox;
