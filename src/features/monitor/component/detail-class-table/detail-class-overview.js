import { Box, Button, Typography } from "@mui/material";
import React from "react";

const DetailClassOverview = ({ selectedItem, onClose }) => {
  return (
    <Box
      sx={{
        width: "650px",
        display: "flex",
        flexDirection: "column",

        gap: "2rem",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <img
          onClick={onClose}
          src="./assets/icons/expand-icon-black.svg"
          style={{
            cursor: "pointer",
          }}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <img
            style={{
              width: "25px",
              height: "25px",
              marginRight: "1rem",
            }}
            src={
              selectedItem?.status === "Good Health"
                ? "./assets/icons/good-health-icon.svg"
                : selectedItem?.status === "Concerning Health"
                ? "./assets/icons/concerning-health-icon.svg"
                : selectedItem?.status === "Bad Health"
                ? "./assets/icons/bad-health-icon.svg"
                : "./assets/icons/unknown-health-icon.svg"
            }
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>
              {selectedItem?.name}
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>
              {selectedItem?.agentNumber} Agents
            </Typography>
          </Box>
        </Box>
        <Button
          variant="outlined"
          sx={{
            border: "1px solid black",
            color: "black",
            borderRadius: "0px",
            fontSize: "12px",
            p: 0,
            width: "90px",
            height: "25px",
          }}
          endIcon={<img src="./assets/icons/arrow-down.svg" />}
        >
          Actions
        </Button>
      </Box>
    </Box>
  );
};

export default DetailClassOverview;
