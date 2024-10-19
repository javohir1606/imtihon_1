import React from "react";
import { Box, Container, Typography } from "@mui/material";
import banner from "../../assets/img/banner.png";
import { SeconderyButton } from "../ui/Button/style";
import img from "../../assets/img/icon.svg";

export const Banner = () => {
  return (
    <Box pb={"100px"}>
      <Box
        pt={"100px"}
        pb={"147px"}
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography fontFamily={"Yellowtail"} variant="h3">
            100% Natural Food
          </Typography>
          <Typography width={"530px"} mt={"8px"} mb={"24px"} variant="h1">
            Choose the best healthier way of life
          </Typography>
          <SeconderyButton
            endIcon={
              <img src={img} alt="icon" style={{ width: 24, height: 24 }} />
            }
          >
            Explore Now
          </SeconderyButton>
        </Container>
      </Box>
    </Box>
  );
};
