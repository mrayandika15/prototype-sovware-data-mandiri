import { Box } from "@mui/material";
import React from "react";
import DesignNodeClass from "./design-node-class";
import { useDesignNodeContetext } from "../../context/design-node-context";

const DesignNodeClassList = () => {
  const { processorListState, onAdd } = useDesignNodeContetext();

  const { setOpenProcessorList, openProcessorList } = processorListState;

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Box
      sx={{
        width: "80px",
        height: "100vh",
        background: "#F6F4F4",
        position: "absolute",
        top: -20,
        left: -18,
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "25px",
      }}
    >
      <DesignNodeClass
        label="PROCESSOR"
        url="./assets/icons/node/processor.svg"
        onClick={() => setOpenProcessorList(true)}
        onDragStart={(event) => onDragStart(event, "processor")}
      />
      <DesignNodeClass
        label="REMOTE PROCCESS GROUP"
        url="./assets/icons/node/cloud.svg"
        onClick={() =>
          onAdd({
            type: "cloudNode",
            label: "REMOTE PROCCESS GROUP",
          })
        }
        onDragStart={(event) => onDragStart(event, "cloud")}
      />
      <DesignNodeClass
        label="FUNNEL"
        url="./assets/icons/node/funnel.svg"
        onClick={() =>
          onAdd({
            type: "funnelNode",
            label: "FUNNEL",
          })
        }
        onDragStart={(event) => onDragStart(event, "funnel")}
      />
    </Box>
  );
};

export default DesignNodeClassList;
