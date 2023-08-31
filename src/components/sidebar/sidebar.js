import { Box, Drawer, Fade, Typography } from "@mui/material";
import React from "react";
import ButtonIconSidebar from "./button-icon-sidebar";
import UserIconSidebar from "./user-icon-sidebar";
import ExpandBox from "./expand-box";

const Sidebar = ({ state }) => {
  const { isActive, setIsActive } = state;

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: isActive ? "250px" : "60px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          background: "#3C4565",
          width: isActive ? "250px" : "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: isActive ? "flex-start" : "center",
          py: "20px",
          gap: "20px",
          overflow: "hidden",
          transition: "all 0.3s ease",
        },
      }}
    >
      <ExpandBox isActive={isActive}>
        <img src="./assets/icons/logo.svg" />

        {isActive && (
          <Box
            display="flex"
            flexDirection="column"
            sx={{ transition: "all 0.3s ease" }}
          >
            <Typography sx={{ color: "#fff", fontWeight: "700" }}>
              SOVWARE
            </Typography>
            <Typography sx={{ color: "#fff", fontWeight: "400" }}>
              EDGE SYSTEM
            </Typography>
          </Box>
        )}
      </ExpandBox>

      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "15px",
            width: "100%",
          }}
        >
          <ButtonIconSidebar
            isActive
            isExpand={isActive}
            label="Monitor"
            src="./assets/icons/icon-dashboard-fill.svg"
          />
          <ButtonIconSidebar
            src="./assets/icons/icon-design.svg"
            isExpand={isActive}
            label="Design"
          />
        </Box>

        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <ExpandBox isActive={isActive}>
            <UserIconSidebar letter="A" />
            {isActive && (
              <Typography sx={{ color: "#8490BD", fontWeight: "400" }}>
                Administrator
              </Typography>
            )}
          </ExpandBox>

          <ExpandBox>
            {isActive && (
              <Typography sx={{ color: "#8490BD", fontWeight: "400" }}>
                0.0.1-123
              </Typography>
            )}

            <ButtonIconSidebar
              sx={{ pl: isActive ? "75px" : "0px" }}
              src={
                isActive
                  ? "./assets/icons/icon-unexpand-panel.svg"
                  : "./assets/icons/icon-expand-panel.svg"
              }
              onClick={() => setIsActive(!isActive)}
            />
          </ExpandBox>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
