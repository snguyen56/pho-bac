import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import { Link } from "gatsby";

export default function Footer() {
  const linkStyle = {
    margin: "4px",
    color: "white",
    textDecorationLine: "none",
  };
  return (
    <footer
      style={{
        backgroundColor: "grey",
        padding: 20,
        color: "white",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Stack>
              <Typography variant="h6" gutterBottom>
                Title
              </Typography>
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
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Menu
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Information
            </Typography>
            <Typography>
              4897 Buford Hwy. NE Ste. 105 Chamblee, GA 30341
            </Typography>
            <Typography display="inline-flex" alignItems="center">
              <LocalPhoneIcon />
              &nbsp; 770-986-4273
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack>
              <Typography variant="h6" gutterBottom>
                Social Media
              </Typography>
              <Box display="flex" flexDirection="row">
                <a
                  href="https://www.facebook.com/Phobacatl"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <FacebookIcon fontSize="large" />
                </a>
                <a
                  href="https://www.instagram.com/phobac_atl/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <InstagramIcon fontSize="large" />
                </a>
              </Box>
              Copyright © 2021, Pho Bac Inc. ALL RIGHTS RESERVED 2021
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
