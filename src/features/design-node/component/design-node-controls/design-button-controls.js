import { Button } from "@mui/material";
import React from "react";

const DesignButtonControls = ({ children }) => {
  return (
    <Button
      variant="contained"
      sx={{
        p: "0px",
        fontSize: "14px",
        color: "rgba(0, 0, 0, 0.30)",
        px: "10px",
        py: "2px",
        borderRadius: "10px",
        background: "white",

        "&:hover": {
          background: "white",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default DesignButtonControls;
