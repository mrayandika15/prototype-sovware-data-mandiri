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
import { useDesignNodeContetext } from "../../context/design-node-context";
import { designProcessorList } from "../../data/design-processor-list";
import DesignNodeProcessorTable from "./design-node-processor-table";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  width: "600px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const DesignNodeProcessorList = () => {
  const { processorListState, onAdd } = useDesignNodeContetext();

  const { setOpenProcessorList, openProcessorList } = processorListState;

  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleAddProcessor = () => {
    onAdd({ label: selectedItem.processor, type: "processorNode" });
    setOpenProcessorList(false);
  };

  return (
    <Modal
      open={openProcessorList}
      onClose={() => setOpenProcessorList(false)}
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
          Processor List
        </Typography>

        <DesignNodeProcessorTable
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />

        <Button
          onClick={handleAddProcessor}
          variant="contained"
          disabled={!selectedItem}
          sx={{
            width: "100%",
            height: "40px",
            background: "#2D9CDB",
            color: "#fff",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Add Processor
        </Button>
      </Box>
    </Modal>
  );
};

export default DesignNodeProcessorList;
