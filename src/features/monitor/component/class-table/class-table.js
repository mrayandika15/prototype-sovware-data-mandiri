import * as React from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import classTableRowsData from "../../data/class-table-rows-data";
import ClassTableHead from "./class-table-head";
import ClassStatus from "./class-status";
import DetailClassTable from "../detail-class-table/detail-class-table";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function ClassTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("status");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [detailView, setDetailView] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - classTableRowsData.length)
      : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(classTableRowsData, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer>
        <Table
          sx={{
            minWidth: 750,
            borderCollapse: "separate",
            borderSpacing: "0 10px",
            background: "transparent",
            "& .MuiTableCell-root": {
              borderBottom: "none",
              background: "white",
            },
            "& .MuiTableCell-head": {
              background: "transparent",
              borderBottom: "1px solid #E0E0E0",
            },
          }}
          aria-labelledby="tableTitle"
          size="small"
        >
          <ClassTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              const labelId = `class-table-${index}`;

              return (
                <TableRow
                  hover
                  key={row.name}
                  onClick={() => {
                    setDetailView(true);
                    setSelectedItem(row);
                  }}
                  sx={{
                    cursor: "pointer",
                    height: "75px",
                    border: "1px solid #E0E0E0",
                    "& .MuiTableCell-root": {
                      borderBottom: "1px solid #E0E0E0",
                      borderTop: "1px solid #E0E0E0",
                    },
                  }}
                >
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    sx={{
                      width: "150px",
                      position: "relative",
                    }}
                  >
                    <ClassStatus status={row.status} />
                  </TableCell>
                  <TableCell sx={{ width: "350px" }}>{row.name}</TableCell>
                  <TableCell align="right">{row.agentNumber}</TableCell>
                  <TableCell>{row.lastUpdated}</TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      position: "relative",
                      width: "50px",
                    }}
                  >
                    <img
                      src="./assets/icons/arrow-right.svg"
                      alt="arrow-right-icon"
                    />
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{
          ".MuiTablePagination-select": {
            background: "white",
          },
        }}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={classTableRowsData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <DetailClassTable
        isOpen={detailView}
        onClose={() => setDetailView(false)}
        selectedItem={selectedItem}
      />
    </Box>
  );
}
