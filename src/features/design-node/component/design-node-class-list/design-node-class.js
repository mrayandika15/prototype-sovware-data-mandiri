import { Box, Typography } from "@mui/material";
import React from "react";

const DesignNodeClass = ({ url, label, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "100%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      <img src={url} alt={label} />
      <Typography
        sx={{ color: "#3675EE", fontSize: "10px", textAlign: "center" }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default DesignNodeClass;
