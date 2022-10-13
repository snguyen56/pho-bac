import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "gatsby";
import { Button } from "@mui/material";

import logo from "../images/logo.jpg";

export default function Navbar() {
  const linkStyle = {
    margin: "8px",
    color: "white",
    textDecorationLine: "none",
  };
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ alignItems: "center" }}
    >
      <Toolbar sx={{ spacing: 8 }}>
        <img
          src={logo}
          alt="pho bac logo"
          height={100}
          style={{ margin: "8px" }}
        />
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About Us
        </Link>
        <Link to="/menu" style={linkStyle}>
          Menu
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact Us
        </Link>
        <Button color="warning" variant="contained" size="large">
          Order Now
        </Button>
      </Toolbar>
    </AppBar>
  );
}
