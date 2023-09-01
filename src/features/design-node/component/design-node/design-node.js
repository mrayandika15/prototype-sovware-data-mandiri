import { Box, Modal } from "@mui/material";
import React, { useCallback, useRef } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
} from "reactflow";

import "reactflow/dist/style.css";
import DesignButtonControls from "../design-node-controls/design-button-controls";
import { useDesignNodeContetext } from "../../context/design-node-context";
import DesignProcessor from "../design-class/design-processor";
import DesignCloud from "../design-class/design-cloud";
import DesignFunnel from "../design-class/design-funnel";
import DesignActionNode from "./design-action-node";

const getNodeId = () => `randomnode_${+new Date()}`;

const nodeTypes = {
  processorNode: DesignProcessor,
  cloudNode: DesignCloud,
  funnelNode: DesignFunnel,
};

const DesignNode = () => {
  const {
    nodes,
    onConnect,
    onEdgesChange,
    onNodesChange,
    edges,
    setConnectAction,
    connectAction,
    rfInstance,
    setRfInstance,
    setNodes,
    processorListState: { setOpenProcessorList },
  } = useDesignNodeContetext();

  const connectionModal = connectAction?.state || false;

  const reactFlowWrapper = useRef(null);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = rfInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      if (type === "processor") {
        setOpenProcessorList(true);
        return;
      }

      const newNode = {
        id: type + getNodeId(),
        type: `${type}Node`,
        position,
        data: { label: type === "cloud" ? "REMOTE PROCCESS GROUP" : "FUNNEL" },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [rfInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <Box
      sx={{ width: "100vw", height: "100vh", position: "fixed", inset: "0" }}
      ref={reactFlowWrapper}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        onInit={setRfInstance}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
      <DesignActionNode
        open={connectionModal}
        onClose={() => {
          setConnectAction({
            ...connectAction,
            state: false,
          });
        }}
      />
    </Box>
  );
};

export default DesignNode;
