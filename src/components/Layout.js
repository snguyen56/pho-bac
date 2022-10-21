import React from "react";
import { Box } from "@mui/system";
import { alpha } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Header from "./header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <CssBaseline />
      <Header height={500} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
