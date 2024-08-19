/** @format */

import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

const ContactUs = () => {
  return (
    <Container maxWidth='md' style={{ padding: "5rem 0" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            sx={{
              textAlign: "center",
              marginBottom: "2rem",
              padding: "1rem",
              background: "#ffa50030",
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
              Contact Us
            </Typography>
            <Typography variant='body1'>
              We would love to hear from you! Please fill out the form below to
              get in touch.
            </Typography>
            <Typography variant='body1' sx={{ marginTop: "1rem" }}>
              Address: 1234 Example St, City, Country
            </Typography>
            <Typography variant='body1'>Phone: (123) 456-7890</Typography>
            <Typography variant='body1'>Email: contact@example.com</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label='Your Name' fullWidth variant='outlined' required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Your Email'
            fullWidth
            variant='outlined'
            required
            type='email'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField label='Subject' fullWidth variant='outlined' required />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Message'
            fullWidth
            variant='outlined'
            multiline
            rows={4}
            required
          />
        </Grid>
        <Grid item xs={12} align='center'>
          <Button variant='contained' color='warning' size='large'>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
