import React from "react";
import HeadPage from "./HeadPage";
import Image from "next/image";
import { Button, Grid, Box } from "@mui/material";

const Sponsors = () => {
  // Array of sponsor logo filenames (assuming they follow logo-1.png, logo-2.png pattern)
  const sponsorLogos = [1, 2, 3]; // Adjust this array based on your actual sponsors

  return (
    <Box sx={{ py: 8, px: 2 }}>
      <HeadPage
        content={"Our Sponsors"}
        second="Global Grand Event on Digital Design"
      />

      <Grid
        container
        columns={12}
        // spacing={2}
        spacing={4}
        justifyContent="center"
        sx={{ mt: 4 }}>
        {sponsorLogos.map((logoNum) => (
          <Grid item xs={6} sm={4} md={3} key={logoNum}>
            <Box
              sx={{
                // p: 2,
                // height: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease-in-out",
                },
                transition: "transform 0.3s ease-in-out",
              }}
              className="bg-white b-[1px solid #ddd] shadow-md hover:shadow-lg transition-shadow duration-300">
              <div
              // className="mb-30"
              >
                <Image
                  src={`/img/sponsors/logo-0${logoNum}.png`}
                  alt={`Sponsor ${logoNum}`}
                  width={160}
                  height={80}
                  style={{ objectFit: "contain" }}
                  onError={(e) => {
                    e.target.src = "/img/sponsors/logo-default.png"; // Fallback image
                  }}
                  className="
                  min-w-[300px]
                  max-h-[200px]
                  "
                  // mb-30
                  // w-100px h-100px object-cover
                />
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <Button
          variant="contained"
          sx={{
            px: 4,
            py: 1.5,
            backgroundColor: "#ea1e63",
            "&:hover": {
              backgroundColor: "#c2185b",
            },
          }}>
          View All Sponsors
        </Button>
      </Box>
    </Box>
  );
};

export default Sponsors;
