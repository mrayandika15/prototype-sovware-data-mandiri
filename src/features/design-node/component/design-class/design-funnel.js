import React from "react";
import Node from "../../../../components/node/node";

const DesignFunnel = ({ data, isConnectable }) => {
  return (
    <Node
      data={data}
      isConnectable={isConnectable}
      type="funnel"
      src="./assets/icons/node/funnel.svg"
    />
  );
};

export default DesignFunnel;
