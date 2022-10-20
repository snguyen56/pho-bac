import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "./navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
