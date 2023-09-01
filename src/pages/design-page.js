import {
  Box,
  Button,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import DesignNodeClassList from "../features/design-node/component/design-node-class-list/design-node-class-list";
import DesignNodeControls from "../features/design-node/component/design-node-controls/design-node-controls";
import DesignNode from "../features/design-node/component/design-node/design-node";
import DesignNodeContext from "../features/design-node/context/design-node-context";
import DesignNodeProcessorList from "../features/design-node/component/design-node-processor-list/design-node-processor-list";

import DesignFlowList from "../features/design-node/component/design-flow-list/design-flow-list";

const DesignPage = () => {
  const [openDesignList, setOpenDesignList] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

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
        <DesignNodeControls name={selectedItem} />
        <DesignNode />
        <DesignNodeProcessorList />
        <DesignFlowList
          state={{ openDesignList, setOpenDesignList }}
          selectedItemState={{ selectedItem, setSelectedItem }}
        />
      </DesignNodeContext>
    </Box>
  );
};

export default DesignPage;
