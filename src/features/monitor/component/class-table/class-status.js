import { Box, Typography } from "@mui/material";
import React from "react";

const ClassStatus = ({ status }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <img
        src={
          status === "Good Health"
            ? "./assets/icons/good-health-icon.svg"
            : status === "Concerning Health"
            ? "./assets/icons/concerning-health-icon.svg"
            : status === "Bad Health"
            ? "./assets/icons/bad-health-icon.svg"
            : "./assets/icons/unknown-health-icon.svg"
        }
      />
      <Typography
        sx={{
          fontSize: "12px",
          lineHeight: "normal",
          fontStretch: "normal",
          color: "#4D4D4D",
          textAlign: "center",
        }}
      >
        {status}
      </Typography>
    </Box>
  );
};

export default ClassStatus;
