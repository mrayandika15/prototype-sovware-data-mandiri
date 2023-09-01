import { Box } from "@mui/material";
import React from "react";
import DesignNodeClassList from "../features/design-node/component/design-node-class-list/design-node-class-list";
import DesignNodeControls from "../features/design-node/component/design-node-controls/design-node-controls";
import DesignNode from "../features/design-node/component/design-node/design-node";
import DesignNodeContext from "../features/design-node/context/design-node-context";
import DesignNodeProcessorList from "../features/design-node/component/design-node-processor-list/design-node-processor-list";

const DesignPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <DesignNodeContext>
        <DesignNodeClassList />
        <DesignNodeControls />
        <DesignNode />
        <DesignNodeProcessorList />
      </DesignNodeContext>
    </Box>
  );
};

export default DesignPage;
