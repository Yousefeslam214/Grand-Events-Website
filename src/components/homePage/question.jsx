import React, { useState } from "react";
import HeadPage from "./HeadPage";
import {
  Card,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Question = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const faqs = [
    {
      question: "When and where is the event?",
      answer:
        "The Global Grand Event on Digital Design will take place on November 15-17, 2023 at the Convention Center in San Francisco, CA.",
    },
    {
      question: "How can I register for the event?",
      answer:
        "You can register through our website by clicking on the 'Register' button and filling out the registration form. Early bird tickets are available until October 15.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Cancellations made more than 30 days before the event will receive a full refund. Cancellations between 15-30 days will receive a 50% refund. No refunds for cancellations within 14 days of the event.",
    },
    {
      question: "Will there be virtual attendance options?",
      answer:
        "Yes, we will be streaming all main stage presentations. Virtual attendees will have access to the recordings for 30 days after the event.",
    },
    {
      question: "What COVID-19 safety measures are in place?",
      answer:
        "We will follow all local health guidelines. Currently, we recommend but don't require masks. Hand sanitizing stations will be available throughout the venue.",
    },
  ];

  return (
    <Box sx={{ py: 6, px: 2 }}>
      <HeadPage
        content="Frequently Asked Questions"
        second="Global Grand Event on Digital Design"
      />

      <Card
        sx={{
          maxWidth: 800,
          mx: "auto",
          p: 3,
          borderRadius: 2,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}>
        <Typography variant="h2" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
          Common Questions
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}>
              <Typography
                sx={{ fontWeight: expanded === `panel${index}` ? 600 : 500 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Typography
          variant="body2"
          sx={{ mt: 3, textAlign: "center", color: "text.secondary" }}>
          Still have questions? Email us at yousefeslam214@gmail.com
        </Typography>
      </Card>
    </Box>
  );
};

export default Question;
