import { Box, Container, Stack } from "@mui/material";
import React from "react";
import img1 from "../../assets/img/img1.png";

export const OrganicCard = () => {
  return (
    <Box p={"100px"} pb={"100px"} mb={"177px"} bgcolor={"#f1f8f4"}>
      <Container>
        <Stack direction={"row"} textAlign={"center"} gap={"42px"} sx={{ width: 400, height: 380 }}>
          <img src={img1} alt="img" />
          <img src={img1} alt="img" />
          <img src={img1} alt="img" />
        </Stack>
      </Container>
    </Box>
  );
};
