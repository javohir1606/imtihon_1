import { Box, Container, Stack } from "@mui/material";
import React from "react";
import banner from "../../assets/img/Banner7.png";
import { ServesCard } from "../../components/servesCard/serves-Card";
export const Serves = () => {
  return (
    <Box>
      <Stack>
        <img src={banner} alt="" />
      </Stack>
      <Container>
        <ServesCard />
      </Container>
    </Box>
  );
};
