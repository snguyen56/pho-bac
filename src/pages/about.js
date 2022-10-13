import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function about() {
  return (
    <>
      <Navbar /> <Footer />
    </>
  );
}

export const Head = () => <title>About</title>;
