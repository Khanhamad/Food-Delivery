/** @format */

import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_nm4crd7", // Replace with your EmailJS service ID
        "template_hehf93l", // Replace with your EmailJS template ID
        formData,
        "-5AnRAh0SoSG241sN" // Replace with your EmailJS user ID (found in EmailJS dashboard)
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text); // Logs status and text
          if (response.status === 200 || response.status === 204) {
            alert("Message sent successfully!");
          }
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send the message, please try again later.");
        }
      );
  };

  return (
    <Container maxWidth='md' style={{ padding: "5rem 0" }}>
      <form onSubmit={handleSubmit}>
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
                We would love to hear from you! Please fill out the form below
                to get in touch.
              </Typography>
              <Typography variant='body1' sx={{ marginTop: "1rem" }}>
                Address: 1234 Example St, City, Country
              </Typography>
              <Typography variant='body1'>Phone: (123) 456-7890</Typography>
              <Typography variant='body1'>
                Email: contact@example.com
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label='Your Name'
              name='name'
              fullWidth
              variant='outlined'
              required
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Your Email'
              name='email'
              fullWidth
              variant='outlined'
              required
              type='email'
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Subject'
              name='subject'
              fullWidth
              variant='outlined'
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Message'
              name='message'
              fullWidth
              variant='outlined'
              multiline
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} align='center'>
            <Button
              type='submit'
              variant='contained'
              color='warning'
              size='large'
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactUs;
