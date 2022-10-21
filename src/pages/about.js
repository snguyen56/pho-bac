import React from "react";
import Layout from "../components/Layout";
import { Container } from "@mui/material";

export default function about() {
  return (
    <>
      <Layout>
        <section>
          <Container>
            <h1>Our Story</h1>
            <p>
              Pho Bac, established in 1997, is now one of the most famous trade
              names known in Atlanta, Georgia. During the past 24 years, our
              restaurant in Chamblee ceaselessly improves and serves millions of
              delicious pho bowls to the guests. We are operating as a family
              heirloom and family-owned pho restaurant, which provides our
              distinguished guests with a cozy and intimate space. In order to
              expand our activity and serve more guests in different regions,
              Pho Bac has recently set up its new division in Duluth, Georgia.
              With our family heirloom formula from 12 kinds of herbs for a
              natural, tasty pho bowl, it is believed that Pho Bac will satisfy
              even the most gastronomic guests.
            </p>
          </Container>
        </section>
      </Layout>
    </>
  );
}

export const Head = () => <title>About</title>;
