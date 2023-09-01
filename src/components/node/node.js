import { Box, Typography } from "@mui/material";
import React from "react";
import { Handle, Position, isNode } from "reactflow";

const Node = ({ data, isConnectable, src, type }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {type === "funnel" && (
        <>
          <Handle
            type="target"
            position={Position.Top}
            isConnectable={isConnectable}
          />
          <Handle
            type="source"
            position={Position.Top}
            id={`${type}Node-source-a`}
            isConnectable={isConnectable}
          />
        </>
      )}

      <img src={src} />
      <Typography variant="caption">{data.label}</Typography>

      <Handle
        type="target"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id={`${type}Node-source-c`}
        isConnectable={isConnectable}
      />
    </Box>
  );
};

export default Node;
