import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { designProcessorList } from "../../data/design-processor-list";

const DesignNodeProcessorTable = ({ setSelectedItem, selectedItem }) => {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>Processor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {designProcessorList.map((row) => (
            <TableRow
              onClick={() => setSelectedItem(row)}
              key={row.name}
              sx={{
                cursor: "pointer",
                height: "75px",
                backgroundColor:
                  selectedItem?.processor === row?.processor
                    ? "#F5F5F5"
                    : "white",
                ":hover": {
                  backgroundColor: "#F5F5F5",
                },
                "& .MuiTableCell-root": {
                  border: "none",
                  borderBottom: "1px solid #E0E0E0",
                },
              }}
            >
              <TableCell component="th" scope="row">
                {row.status}
              </TableCell>

              <TableCell>{row.processor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DesignNodeProcessorTable;
