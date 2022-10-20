import * as React from "react";
import "./style.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { foods } from "../assets/Food";

import bg from "../images/bg.jpg";
import pho from "../images/BEP_Food_Photos_PHO-8.jpg";
import banh from "../images/BEP_Food_Photos_BanhMiDacBiet.jpg";

export default function Index() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CssBaseline />
      <div
        style={{
          height: "700px",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: (theme) => alpha(theme.palette.common.black, 0.5),
            height: "inherit",
          }}
        >
          <Navbar />
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "50vh",
            }}
          >
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
          </Container>
        </Box>
      </div>
      <div style={{ marginBottom: 50 }}>
        <Container>
          <Typography variant="h3" textAlign="center" my={5}>
            Explore our Most Popular Dishes
          </Typography>
          <Grid container spacing={3}>
            {foods.map((food) => (
              <Grid item xs={4}>
                <Card style={{ backgroundColor: "lightgrey" }}>
                  <CardMedia component="img" image={food.image} />
                  <CardHeader title={food.name} subheader="Translated Food" />
                  <CardContent>Food Description</CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Container sx={{ mt: 3 }}>
            <Tabs value={value} onChange={handleChange} centered>
              {foods.map((food) => (
                <Tab label={food.name} disableRipple />
              ))}
              {/* <Tab label="Phở" disableRipple />
              <Tab label="com" disableRipple />
              <Tab label="Banh Mi" disableRipple />
              <Tab label="Khai Vi" disableRipple />
              <Tab label="Bun" disableRipple />
              <Tab label="Banh Hoi" disableRipple />
              <Tab label="Beverages" disableRipple />
              <Tab label="Che (pudding)" disableRipple />
              <Tab label="Smoothies" disableRipple /> */}
            </Tabs>
            {value === 0 && (
              <div value={0} index={0}>
                tab 1
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Card style={{ backgroundColor: "lightgrey" }}>
                      <CardMedia component="img" image={pho} />
                      <CardHeader title="title" subheader="Translated Food" />
                      <CardContent>Food Description</CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card style={{ backgroundColor: "lightgrey" }}>
                      <CardMedia component="img" image={banh} />
                      <CardHeader title="title" subheader="Translated Food" />
                      <CardContent>Food Description</CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </div>
            )}
            {value === 1 && (
              <div value={0} index={0}>
                tab 2
                <Card style={{ backgroundColor: "lightgrey" }}>
                  <CardMedia component="img" image={banh} />
                  <CardHeader title="title" subheader="Translated Food" />
                  <CardContent>Food Description</CardContent>
                </Card>
              </div>
            )}
            {/* <div value={0} index={0}>
              <Card style={{ backgroundColor: "lightgrey" }}>
                <CardMedia component="img" image={pho} />
                <CardHeader title="title" subheader="Translated Food" />
                <CardContent>Food Description</CardContent>
              </Card>
            </div> */}
          </Container>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export const Head = () => <title>Pho Bac</title>;
