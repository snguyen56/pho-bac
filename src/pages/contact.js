import React from "react";
import Layout from "../components/Layout";
import { Container } from "@mui/material";

export default function contact() {
  return (
    <Layout>
      <Container sx={{ my: 5 }}>
        <section className="centered-block">
          <div>
            <h1>Contact Us</h1>
            <h2>Address:</h2>
            <p>
              4897 Buford Hwy. NE Ste. 105 <br /> Chamblee, GA 30341
            </p>
            <h2>Phone:</h2>
            <p>770-986-4273</p>
            <h2>Email:</h2>
            <p>benzjenny97@yahoo.com</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.189900006973!2d-84.29022148478936!3d33.88476278065184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5083459a56851%3A0x6ef3f193fb3fae71!2zUGjhu58gQuG6r2MgUmVzdGF1cmFudA!5e0!3m2!1sen!2sus!4v1666537744979!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </Container>
    </Layout>
  );
}
