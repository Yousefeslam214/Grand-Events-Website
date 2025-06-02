import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const EventGuideline = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 4 },
        backgroundColor: "#f9f9f9",
      }}>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
        }}>
        {/* Left Column - Title and Description */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: "#ea1e63",
            }}>
            Event Guideline
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 600,
              mb: 4,
              color: "text.primary",
            }}>
            Global Grand Event on Digital Design
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              lineHeight: 1.8,
              color: "text.secondary",
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Typography>
        </Box>

        {/* Right Column - Checklist */}
        <Box
          sx={{ flex: 1 }}
          className="flex flex-col itemsCenterSmall
       ">
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 4,
              color: "text.primary",
            }}>
            Check List
          </Typography>
          <List sx={{ p: 0 }}>
            {[
              "Lorem Ipsum is simply dummy",
              "Ipsum passages, and more recently",
              "PageMaker including versions",
              "Lorem Ipsum is simply dummy",
            ].map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  px: 0,
                  py: 1,
                  alignItems: "flex-start",
                }}>
                <ListItemIcon sx={{ minWidth: "40px", mt: "4px" }}>
                  <CheckCircleIcon color="#ea1e63" />
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}>
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default EventGuideline;
