import { Box } from "@mui/material";
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
  } = useDesignNodeContetext();

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
    </Box>
  );
};

export default DesignNode;
