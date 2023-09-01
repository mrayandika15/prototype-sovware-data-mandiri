import { Box } from "@mui/material";
import React from "react";
import Searchbar from "../components/searchbar/searchbar";

import ClassTable from "../features/monitor/component/class-table/class-table";

const MonitorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        mt: "64px",
      }}
    >
      <Searchbar />
      <ClassTable />
    </Box>
  );
};

export default MonitorPage;
