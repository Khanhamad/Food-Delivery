/** @format */

import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

const AboutUs = () => {
  return (
    <Container maxWidth='md' style={{ padding: "5rem 0" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            sx={{
              textAlign: "left",
              marginBottom: "2rem",
              padding: "1rem",
              //   background: "#ffa50030",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant='h4'
              fontWeight={600}
              gutterBottom
              sx={{
                background:
                  "linear-gradient(90deg, rgba(255,76,0,1) 17%, rgba(255,235,0,1) 66%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About Us
            </Typography>
            <Typography variant='body1'>
              Welcome to [Your Food Delivery App Name]! We are dedicated to
              delivering delicious meals from your favorite local restaurants
              right to your doorstep. Our mission is to provide fast, reliable,
              and convenient food delivery services.
            </Typography>
            <Typography variant='body1' sx={{ marginTop: "1rem" }}>
              We partner with a wide range of restaurants to bring you a variety
              of cuisines. Whether you’re craving something spicy, sweet, or
              savory, we’ve got you covered.
            </Typography>
            <Typography variant='body1' sx={{ marginTop: "1rem" }}>
              Thank you for choosing [Your Food Delivery App Name]. We look
              forward to serving you!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
