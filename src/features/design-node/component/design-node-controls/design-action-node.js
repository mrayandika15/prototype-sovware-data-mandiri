import { Button, Menu, MenuItem } from "@mui/material";
import React, { useCallback } from "react";
import { useDesignNodeContetext } from "../../context/design-node-context";
import yaml from "js-yaml";

const DesignActionControl = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const { rfInstance } = useDesignNodeContetext();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const exportToYML = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();

      try {
        const yamlData = yaml.dump(flow);

        const blob = new Blob([yamlData], { type: "text/yaml" });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "data.yml";

        a.click();

        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error converting to YAML:", error);
        return null;
      }
    }
  }, [rfInstance]);

  return (
    <>
      <Button
        variant="contained"
        sx={{
          background: "white",
          color: "#14C8E0",
          fontSize: "12px",
          p: "0px",
          px: "15px",
          py: "2px",
          borderRadius: "10px",
          zIndex: 1,
          ":hover": {
            background: "white",
          },
        }}
        endIcon={
          <img
            src="./assets/icons/arrow-down-fill.svg"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        }
        onClick={handleClick}
      >
        Actions
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={exportToYML}>Export To YML</MenuItem>
      </Menu>
    </>
  );
};

export default DesignActionControl;
