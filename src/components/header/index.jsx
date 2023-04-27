import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import PrimaryButton from "../primaryButton";
import Logo from "./logo.png";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={1}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "#FFFFFF",
          }}
        >
          <img src={Logo} alt="logo" />
          <PrimaryButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
