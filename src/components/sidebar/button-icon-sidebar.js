import { Box, Typography } from "@mui/material";
import React from "react";

const ButtonIconSidebar = ({ src, isActive, onClick, isExpand, label, sx }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        width: isExpand ? "250px" : "60px",
        py: "5px",
        height: "fit-content",
        display: "flex",
        justifyContent: isExpand ? "flex-start" : "center",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
        gap: "10px",
        pl: isExpand ? "15px" : "0px",
        ...sx,
      }}
    >
      {isActive ? (
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            left: 0,
            width: "3px",
            background: "#14C8E0",
          }}
        />
      ) : null}

      <img src={src} style={{ width: "20.898px", height: "100%" }} />

      {isExpand && (
        <Typography sx={{ color: isActive ? "#14C8E0" : "#8490BD" }}>
          {label}
        </Typography>
      )}
    </Box>
  );
};

export default ButtonIconSidebar;
