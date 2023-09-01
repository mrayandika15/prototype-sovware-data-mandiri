import React from "react";
import Node from "../../../../components/node/node";

const DesignProcessor = ({ data, isConnectable }) => {
  return (
    <Node
      data={data}
      isConnectable={isConnectable}
      type="processor"
      src="./assets/icons/node/processor.svg"
    />
  );
};

export default DesignProcessor;
