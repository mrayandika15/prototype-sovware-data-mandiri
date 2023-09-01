import { Alert, Snackbar } from "@mui/material";
import React, { useCallback } from "react";
import { addEdge, useEdgesState, useNodesState } from "reactflow";

const designNode = React.createContext(null);

const getNodeId = () => `randomnode_${+new Date()}`;

const DesignNodeContext = ({ children }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [openProcessorList, setOpenProcessorList] = React.useState(false);
  const [connectAction, setConnectAction] = React.useState({
    state: false,
  });

  const [error, setError] = React.useState(false);

  const [rfInstance, setRfInstance] = React.useState(null);

  const isValidConnection = (source, target) => {
    return true;
  };

  const onConnect = useCallback(
    (params) => {
      const { source, target } = params;

      const sourceFilter = source.match(/^(cloud)[A-Za-z0-9_]+$/);
      const targetFilter = target.match(/^(cloud)[A-Za-z0-9_]+$/);

      if (sourceFilter && targetFilter && sourceFilter[1] === targetFilter[1]) {
        setError(true);
        return;
      }

      if (!isValidConnection(source, target)) {
        return;
      }

      setConnectAction({
        params: { ...params },
        state: true,
      });
    },
    [setEdges]
  );

  const onAdd = useCallback(
    ({ label, type }) => {
      const newNode = {
        id: type + getNodeId(),
        type: type,
        data: {
          label: label,
          type: type,
        },
        position: {
          x: Math.random(),
          y: Math.random(),
        },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );

  return (
    <designNode.Provider
      value={{
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
        onConnect,
        onAdd,
        connectAction,
        setConnectAction,
        rfInstance,
        setRfInstance,
        processorListState: { openProcessorList, setOpenProcessorList },
      }}
    >
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        open={error}
        onClose={() => setError(false)}
        message="I love snacks"
        key="error-message"
        autoHideDuration={6000}
      >
        <Alert severity="error">Cant connect beetwen cloud to cloud</Alert>
      </Snackbar>
      {children}
    </designNode.Provider>
  );
};

export const useDesignNodeContetext = () => {
  const context = React.useContext(designNode);
  if (context === undefined) {
    throw new Error(
      "useDesignNodeContetext must be used within a DesignNodeContext"
    );
  }

  const {
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    onConnect,
    onAdd,
    connectAction,
    setConnectAction,
    rfInstance,
    setRfInstance,
    processorListState: { openProcessorList, setOpenProcessorList },
  } = context;

  return {
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    onConnect,
    onAdd,
    connectAction,
    setConnectAction,
    rfInstance,
    setRfInstance,
    processorListState: { openProcessorList, setOpenProcessorList },
  };
};

export default DesignNodeContext;
