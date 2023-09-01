import { Button } from "@mui/material";
import React from "react";

const DesignActionControl = () => {
  return (
    <Button
      variant="contained"
      sx={{
        background: "white",
        color: "#14C8E0",
        fontSize: "12px",
        p: "0px",
        px: "15px",
        py: "2px",
        borderRadius: "10px",
        zIndex: 9999,
        ":hover": {
          background: "white",
        },
      }}
      endIcon={
        <img
          src="./assets/icons/arrow-down-fill.svg"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      }
    >
      Actions
    </Button>
  );
};

export default DesignActionControl;
