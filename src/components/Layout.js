import React from "react";
import { CssBaseline } from "@mui/material";
import Header from "./Header";
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
