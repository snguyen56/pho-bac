import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "gatsby";
import { Button } from "@mui/material";
//import logo from "../images/logo.png";

export default function index() {
  return (
    <>
      <AppBar color="transparent" elevation={0} sx={{ alignItems: "center" }}>
        <Toolbar sx={{ spacing: 8 }}>
          <Link to="/" style={{ margin: "8px" }}>
            Home
          </Link>
          <Link to="/about" style={{ margin: "8px" }}>
            About Us
          </Link>
          <Link to="/menu" style={{ margin: "8px" }}>
            Menu
          </Link>
          <Link to="/contact" style={{ margin: "8px" }}>
            Contact Us
          </Link>
          <Button color="warning" variant="contained">
            Order Now
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export const Head = () => <title>Pho Bac</title>;
