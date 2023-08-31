import { Box, Typography } from "@mui/material";
import React from "react";

const UserIconSidebar = ({ letter }) => {
  return (
    <Box
      sx={{
        width: "30px",
        height: "30px",
        borderRadius: "100%",
        p: "2px",
        background: "#14C8E0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontWeight: "700" }}>{letter}</Typography>
    </Box>
  );
};

export default UserIconSidebar;
