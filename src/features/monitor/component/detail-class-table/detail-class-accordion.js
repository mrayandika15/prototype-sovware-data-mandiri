import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Divider, Grid } from "@mui/material";

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: "10px" }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `detail-tab-${index}`,
    "aria-controls": `detail-class-${index}`,
  };
}

export default function DetailClassAccordion() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const BoxInfo = ({ title, children }) => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10p" }}>
        <Typography sx={{ fontSize: "12px", color: "gray" }}>
          {title}
        </Typography>
        <Box sx={{ fontSize: "12px", fontWeight: "bold" }}>{children}</Box>
      </Box>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab sx={{ fontSize: "12px" }} label="Metrics" {...a11yProps(0)} />
          <Tab sx={{ fontSize: "12px" }} label="Alerts" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box
          sx={{
            w: "full",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #D9D9D9",

            borderRadius: "5px",
          }}
        >
          <Box sx={{ w: "100%", borderBottom: "1px solid #D9D9D9", p: "10px" }}>
            <Typography>Information</Typography>
          </Box>

          <Grid container sx={{ p: "10px" }} gap={1}>
            <Grid item xs={5}>
              <BoxInfo title="Name">
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img src="./assets/icons/copy.svg" />
                  <Divider orientation="vertical" flexItem variant="middle" />
                  <Typography sx={{ color: "#3675EE", fontSize: "10px" }}>
                    d48188fa-4867-4222-9bd3-2de88a984bf4
                  </Typography>
                </Box>
              </BoxInfo>
            </Grid>
            <Grid item xs={5}>
              <BoxInfo title="FLOW VERSION" children="66" />
            </Grid>
            <Grid item xs={5}>
              <BoxInfo title="DASHBOARD" children="N/A" />
            </Grid>
          </Grid>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography sx={{ fontSize: "12px", color: "gray" }}>
          No Alerts
        </Typography>
      </CustomTabPanel>
    </Box>
  );
}
