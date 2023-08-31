import { Input, InputAdornment, InputBase } from "@mui/material";
import React from "react";

const Searchbar = () => {
  return (
    <InputBase
      sx={{
        border: "1px solid #3C4565",
        padding: "3px 10px",
        width: "300px",
        background: "white",
      }}
      id="searchbar"
      variant="outlined"
      placeholder="Search by class name"
      startAdornment={
        <InputAdornment position="start">
          <img src="./assets/icons/search-icon.svg" />
        </InputAdornment>
      }
    />
  );
};

export default Searchbar;
