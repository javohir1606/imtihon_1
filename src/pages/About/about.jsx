import { Box, Stack } from "@mui/material";
import React from "react";
import banner from "../../assets/img/about-banner.png";
export const About = () => {
  return (
    <Box>
      <Stack pb={"68px"}>
        <img src={banner} alt="" />
      </Stack>
    </Box>
  );
};
