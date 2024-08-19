/** @format */

import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

const PrivacyPolicy = () => {
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
                  "linear-gradient(90deg, rgba(255,76,0,1) 27%, rgba(255,235,0,1) 70%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Privacy Policy
            </Typography>
            <Typography variant='body1' sx={{ textAlign: "left" }}>
              At [Your Food Delivery App Name], we are committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              and share your personal information when you use our services.
            </Typography>
            <Typography variant='h6' sx={{ marginTop: "1.5rem" }}>
              Information We Collect
            </Typography>
            <Typography variant='body1' sx={{ textAlign: "left" }}>
              We collect information that you provide to us directly, such as
              when you create an account, place an order, or contact our support
              team. This information may include your name, email address, phone
              number, and payment details.
            </Typography>
            <Typography variant='h6' sx={{ marginTop: "1.5rem" }}>
              How We Use Your Information
            </Typography>
            <Typography variant='body1' sx={{ textAlign: "left" }}>
              We use your information to process your orders, provide customer
              support, and improve our services. We may also use your
              information to send you promotional offers and updates about our
              services.
            </Typography>
            <Typography variant='h6' sx={{ marginTop: "1.5rem" }}>
              Sharing Your Information
            </Typography>
            <Typography variant='body1' sx={{ textAlign: "left" }}>
              We may share your information with third-party service providers
              who help us operate our business, such as payment processors and
              delivery partners. We do not sell your personal information to
              third parties.
            </Typography>
            <Typography variant='h6' sx={{ marginTop: "1.5rem" }}>
              Your Choices
            </Typography>
            <Typography variant='body1' sx={{ textAlign: "left" }}>
              You can update your account information at any time by logging
              into your account. You can also opt-out of receiving promotional
              emails by following the instructions in those emails.
            </Typography>
            <Typography variant='h6' sx={{ marginTop: "1.5rem" }}>
              Contact Us
            </Typography>
            <Typography variant='body1' sx={{ textAlign: "left" }}>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at [Your Email Address].
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PrivacyPolicy;
