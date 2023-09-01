import React from "react";
import Node from "../../../../components/node/node";

const DesignCloud = ({ data, isConnectable }) => {
  return (
    <>
      <Node
        data={data}
        isConnectable={isConnectable}
        type="cloud"
        src="./assets/icons/node/cloud.svg"
      />
    </>
  );
};

export default DesignCloud;
