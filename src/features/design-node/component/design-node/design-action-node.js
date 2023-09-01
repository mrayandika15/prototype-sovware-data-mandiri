import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { useDesignNodeContetext } from "../../context/design-node-context";
import { addEdge } from "reactflow";

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

const DesignActionNode = ({ open, onClose }) => {
  const { setConnectAction, connectAction, setEdges } =
    useDesignNodeContetext();

  const handleSetEdge = () => {
    setConnectAction({
      ...connectAction,
      state: false,
    });

    const newEdge = {
      id: `edge-${connectAction?.params.source}-${connectAction?.params.target}`,
      source: connectAction?.params.source,
      target: connectAction?.params.target,
      label: connectAction?.actionVal,
    };

    if (
      connectAction?.params?.sourceHandle &&
      connectAction?.params?.target !== connectAction?.params?.source
    ) {
      setEdges((eds) => addEdge(newEdge, eds));
    }

    alert("Cant add Cloud to Cloud");
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-connect-action"
      aria-describedby="modal-connect-action-description"
      disableAutoFocus={true}
      sx={{ border: "none" }}
    >
      <Box sx={{ ...style }}>
        <FormControl component="fieldset">
          <FormLabel sx={{ fontSize: "14px" }} component="legend">
            Select Relationship :
          </FormLabel>
          <RadioGroup
            sx={{ display: "flex", flexDirection: "row", gap: "12px" }}
            aria-label="options"
            name="options"
            value={connectAction?.actionVal}
            onChange={(event) =>
              setConnectAction({
                ...connectAction,
                actionVal: event?.target?.value,
              })
            }
          >
            <FormControlLabel value="error" control={<Radio />} label="Error" />
            <FormControlLabel
              value="success"
              control={<Radio />}
              label="Success"
            />
          </RadioGroup>
        </FormControl>

        <Button
          sx={{
            width: "100%",
            height: "40px",
            background: "#2D9CDB",
            color: "#fff",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
          variant="contained"
          color="primary"
          onClick={() => handleSetEdge()}
        >
          Set
        </Button>
      </Box>
    </Modal>
  );
};

export default DesignActionNode;
