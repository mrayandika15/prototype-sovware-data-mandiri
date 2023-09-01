import {
  Box,
  Button,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import classTableRowsData from "../../../monitor/data/class-table-rows-data";
import Searchbar from "../../../../components/searchbar/searchbar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  width: "1200px",
  height: "700px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const DesignFlowList = ({ state, selectedItemState }) => {
  const { openDesignList, setOpenDesignList } = state;

  const { selectedItem, setSelectedItem } = selectedItemState;

  return (
    <Modal
      open={openDesignList}
      onClose={() => setOpenDesignList(true)}
      aria-labelledby="modal-processor-list"
      aria-describedby="modal-processor-list-description"
      disableAutoFocus={true}
      sx={{ border: "none" }}
    >
      <Box sx={{ ...style }}>
        <Typography
          id="modal-processor-list"
          variant="h6"
          component="h2"
          sx={{ fontWeight: 500, fontSize: "16px" }}
        >
          Open Flow
        </Typography>

        <Box
          sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <Searchbar />
        </Box>

        <TableContainer component={Paper} variant="elevation">
          <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell align="left">Class</TableCell>
                <TableCell align="left">Number Of Agents</TableCell>
                <TableCell align="left">Last Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {classTableRowsData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    cursor: "pointer",
                    height: "75px",
                    backgroundColor:
                      selectedItem === row?.name ? "#F5F5F5" : "white",
                    ":hover": {
                      backgroundColor: "#F5F5F5",
                    },
                    "& .MuiTableCell-root": {
                      border: "none",
                      borderBottom: "1px solid #E0E0E0",
                    },
                  }}
                  onClick={() => setSelectedItem(row.name)}
                >
                  <TableCell align="left">{row.status}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.agentNumber}</TableCell>
                  <TableCell align="left">{row.lastUpdated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          sx={{ width: "100%", justifyContent: "flex-end", display: "flex" }}
        >
          <Button
            onClick={() => {
              setOpenDesignList(false);
            }}
            variant="contained"
            disabled={!selectedItem}
            sx={{
              width: "60px",
              height: "40px",
              background: "#2D9CDB",
              color: "#fff",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Open
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DesignFlowList;
