import React from "react";
import HeadPage from "./HeadPage";
import { Button, Card, Typography, Box, Grid } from "@mui/material";
import Image from "next/image";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Basic",
      price: "$99",
      features: [
        "Access to all keynote speeches",
        "Conference materials",
        "Lunch included",
        "Networking sessions",
      ],
      featured: false,
    },
    {
      name: "Standard",
      price: "$199",
      features: [
        "Everything in Basic",
        "Workshop access",
        "Evening reception",
        "Conference swag bag",
      ],
      featured: true,
    },
    {
      name: "Premium",
      price: "$299",
      features: [
        "Everything in Standard",
        "VIP seating",
        "One-on-one expert sessions",
        "Post-conference materials",
      ],
      featured: false,
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        // minHeight: "100vh",
        overflow: "hidden",
      }}
      id="pricing" // Added for better navigation
    >
      {/* Optimized Fixed Background */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          //   height: "100vh",
          zIndex: -1,
          "&::before": {
            // Dark overlay for better text contrast
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 1,
          },
        }}>
        <Image
          src="/img/background/bg-pricing.jpg"
          alt="Pricing background"
          fill
          priority // Important for above-the-fold images
          quality={80} // Balanced quality for performance
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>

      {/* Content Layer with Smooth Scrolling */}
      <Box
        //   backgroundColor: "rgba(255, 255, 255, 0.93)",
        sx={{
          position: "relative",
          //   minHeight: "100vh",
          py: { xs: 4, md: 8 },
          px: { xs: 2, md: 4 },
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(10px)",
        }}>
        <HeadPage
          content="Pricing Plans"
          second="Choose the perfect plan for your needs"
        />

        <Grid
          container
          columns={12}
          spacing={4}
          justifyContent="center"
          sx={{ mt: 6 }}>
          {pricingTiers.map((tier, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ width: "30%", minWidth: "300px" }}>
              <Card
                sx={{
                  p: 4,
                  height: "100%",
                  border: tier.featured
                    ? "2px solid #ea1e63"
                    : "1px solid rgba(0,0,0,0.12)",
                  transform: tier.featured ? "scale(1.02)" : "none",
                  boxShadow: tier.featured
                    ? "0 10px 25px rgba(0,0,0,0.1)"
                    : "0 4px 12px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: tier.featured ? "scale(1.05)" : "scale(1.03)",
                    boxShadow: tier.featured
                      ? "0 15px 30px rgba(0,0,0,0.15)"
                      : "0 8px 20px rgba(0,0,0,0.12)",
                  },
                }}>
                <Typography
                  component="h3"
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom>
                  {tier.name}
                </Typography>

                <Box sx={{ my: 3 }}>
                  <Typography variant="h3" color="#ea1e63" fontWeight="bold">
                    {tier.price}
                  </Typography>
                  <Typography color="#ea1e63">per attendee</Typography>
                </Box>

                <Box sx={{ flexGrow: 1, mb: 3 }}>
                  {tier.features.map((feature, i) => (
                    <Typography
                      key={i}
                      sx={{
                        mb: 1.5,
                        display: "flex",
                        alignItems: "center",
                        "&::before": {
                          content: '"✓"',
                          mr: 1.5,
                          color: "#ea1e63",
                        },
                      }}>
                      {feature}
                    </Typography>
                  ))}
                </Box>

                <Button
                  fullWidth
                  variant={tier.featured ? "contained" : "outlined"}
                  size="large"
                  sx={{
                    py: 1.5,
                    backgroundColor: tier.featured ? "#ea1e63" : "transparent",
                    color: tier.featured ? "white" : "#ea1e63",
                    borderColor: "#ea1e63",
                    "&:hover": {
                      backgroundColor: tier.featured ? "#c2185b" : "#ea1e63",
                      color: tier.featured ? "#ea1e63" : "white",
                      //   color: tier.featured ? "white" : "#ea1e63",
                    },
                  }}>
                  Get Started
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="body1"
          textAlign="center"
          mt={6}
          color="text.secondary"
          sx={{
            "& .MuiButton-root": {
              textTransform: "none",
              fontWeight: 600,
            },
          }}>
          Need a custom solution?{" "}
          <Button color="primary" sx={{ ml: 1 }}>
            Contact our team
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default Pricing;
