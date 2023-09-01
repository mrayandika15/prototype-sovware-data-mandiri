import { Box, Button, Typography } from "@mui/material";
import React from "react";
import DesignButtonControls from "./design-button-controls";
import DesignActionControl from "./design-action-node";

const DesignNodeControls = ({ name }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: " 100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          pb: "10px",
          width: "100%",
          display: "flex",
          gap: "10px",
          pl: "70px",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <DesignButtonControls>SERVICES</DesignButtonControls>
        <DesignButtonControls>Parameter</DesignButtonControls>
      </Box>

      <Box
        sx={{
          position: "absolute",
          pb: "10px",
          width: "100%",
          display: "flex",
          gap: "10px",
          pl: "80px",
          top: "64px",
          position: "absolute",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Box
            sx={{
              width: "29px",
              height: "29px",
              display: "flex",
              justifyContent: "center",

              alignItems: "center",
              borderRadius: "100%",
              background: "white",
              zIndex: 1,
            }}
          >
            <img
              src="./assets/icons/node/s2re-agent.svg"
              style={{ width: "20px", height: "20px" }}
            />
          </Box>
          <Typography sx={{ fontSize: "14px", zIndex: 999 }}>{name}</Typography>
        </Box>

        <DesignActionControl />
      </Box>
    </Box>
  );
};

export default DesignNodeControls;
