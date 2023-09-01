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

  const isValidConnection = (source, target) => {
    return true;
  };

  const onConnect = useCallback(
    (params) => {
      const { source, target } = params;

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
        },
        position: {
          x: 0,
          y: 0,
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
        processorListState: { openProcessorList, setOpenProcessorList },
      }}
    >
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
    processorListState: { openProcessorList, setOpenProcessorList },
  };
};

export default DesignNodeContext;
