import { Box, Button, Drawer, Typography } from "@mui/material";
import React from "react";
import DetailClassOverview from "./detail-class-overview";
import DetailClassAccordion from "./detail-class-accordion";

const DetailClassTable = ({ isOpen, onClose, selectedItem }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box
        sx={{
          p: "25px",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <DetailClassOverview selectedItem={selectedItem} onClose={onClose} />
        <DetailClassAccordion />
      </Box>
    </Drawer>
  );
};

export default DetailClassTable;
