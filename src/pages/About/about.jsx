import { Box, Container, Grid2, Stack } from "@mui/material";
import React from "react";
import banner from "../../assets/img/about-banner.png";
import { AboutUs } from "../../components/about-us/about-us";
import { AboutAll } from "../../components/aboutAll/about-all";
import { AboutCardData } from "../../components/Data/data";
import { AboutFresh } from "../../components/aboutFresh/about-fresh";
import { Experts } from "../../components/Experts/Experts";
import { Newsletter } from "../Newsletter/Newsletter";
import { AboutItem } from "../../components/Aboutitem/about-item";
export const About = () => {
  return (
    <Box>
      <Stack pb={"68px"}>
        <img src={banner} alt="" />
      </Stack>
      <AboutUs />
      <AboutAll />
      <Box bgcolor={"#f9f8f8"}>
        <Container xs={"lg"}>
          <Grid2
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {AboutCardData.map((item) => (
              <Grid2
                key={item.id}
                sx={{
                  flex: "1 1 calc(25% - 20px)",
                  marginBottom: "20px",
                }}
              >
                <AboutFresh
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  id={item.id}
                />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
      <Experts />
      <AboutItem />
      <Newsletter />
    </Box>
  );
};
