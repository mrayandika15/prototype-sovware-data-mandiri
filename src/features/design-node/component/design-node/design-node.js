import { Box, Modal } from "@mui/material";
import React, { useCallback } from "react";
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

const nodeTypes = {
  processorNode: DesignProcessor,
  cloudNode: DesignCloud,
  funnelNode: DesignFunnel,
};

const DesignNode = () => {
  const {
    nodes,
    onAdd,
    onConnect,
    onEdgesChange,
    onNodesChange,
    edges,
    setEdges,
    setNodes,
    setConnectAction,
    connectAction,
  } = useDesignNodeContetext();

  const connectionModal = connectAction?.state || false;

  return (
    <Box
      sx={{ width: "100vw", height: "100vh", position: "fixed", inset: "0" }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
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
