import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { StaticImage } from "gatsby-plugin-image";
import Navbar from "./navbar";

export default function Header({ props }) {
  return (
    <div style={{ display: "grid" }}>
      <StaticImage
        style={{
          gridArea: "1/1",
          maxHeight: 500,
        }}
        layout="fullWidth"
        alt=""
        src={"../images/banner/bg.jpg"}
        formats={["auto", "webp", "avif"]}
      />
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "stretch ",
          display: "grid",
        }}
      >
        <Navbar />
        <Stack>
          <Typography variant="h3" color="white" textAlign="center">
            Vietnamese Restaurant Noodle Soup
          </Typography>
          <Button
            variant="outlined"
            color="warning"
            size="large"
            sx={{
              width: 200,
              mx: "auto",
              mt: 5,
              borderRadius: 0,
            }}
          >
            order now
          </Button>
        </Stack>
      </div>
    </div>
  );
}
