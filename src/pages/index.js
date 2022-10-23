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
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Divider,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { foods } from "../assets/Food";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Index({ data }) {
  // console.log("food is: ", foods.find(({ name }) => name === "Banh Mi").items);
  // console.log("food is: ", foods[0]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // console.log("event value: ", newValue);
    setValue(newValue);
  };

  return (
    <>
      <CssBaseline />
      <div style={{ display: "grid", opacity: 0.9, backgroundColor: "black" }}>
        <StaticImage
          style={{
            gridArea: "1/1",
            maxHeight: 700,
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
          <Box
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.common.black, 0.5),
              height: "inherit",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ flexGrow: 1 }}>
              <Navbar />
            </div>
            <div style={{ flexGrow: 1 }}>
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
          </Box>
        </div>
      </div>
      <div style={{ marginBottom: 50 }}>
        <Container>
          <Typography variant="h3" textAlign="center" my={5}>
            Explore our Most Popular Dishes
          </Typography>
          <Grid container spacing={3}>
            {data.allFile.nodes.map((node) => (
              <Grid key={node.name} item sm={6} md={4}>
                <Card style={{ backgroundColor: "lightgrey" }}>
                  <CardMedia>
                    <GatsbyImage
                      image={getImage(node.childImageSharp)}
                      alt={node.name}
                    />
                  </CardMedia>
                  <CardHeader
                    title={node.name.slice(2)}
                    subheader="Translated Food"
                  />
                  <CardContent>Food Description</CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Container sx={{ mt: 3 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              TabIndicatorProps={{ hidden: true }}
              sx={{
                py: 5,
                "& .Mui-selected": {
                  color: "black",
                },
              }}
            >
              {foods.map((food) => (
                <Tab label={food.name} disableRipple />
              ))}
            </Tabs>
            <TableContainer component={Paper} elevation={3}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {foods[value].items?.map((item) => (
                    <TableRow>
                      <TableCell>
                        {item.name} <br /> {item.translate}
                      </TableCell>
                      <TableCell align="right">{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* {value === 0 && (
              <TableContainer component={Paper} elevation={3}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {foods[0].items?.map((item) => (
                      <TableRow>
                        <TableCell>
                          {item.name} <br /> {item.translate}
                        </TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
            {value === 1 && (
              <TableContainer component={Paper} elevation={3}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {foods
                      .find(({ name }) => name === "Banh Mi")
                      .items.map((item) => (
                        <TableRow>
                          <TableCell>
                            {item.name} <br /> {item.translate}
                          </TableCell>
                          <TableCell align="right">{item.price}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )} */}
          </Container>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export const query = graphql`
  {
    allFile(sort: { fields: name, order: ASC }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, height: 1000, width: 1500)
        }
      }
    }
  }
`;

export const Head = () => <title>Pho Bac</title>;
