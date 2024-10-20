import { Box, Container, Stack } from "@mui/material";
import React from "react";
import banner from "../../assets/img/Banner6.png";
import { Newsletter } from "../../pages/Newsletter/Newsletter";
import img from "../../assets/img/news.png";
export const Newscard = () => {
  return (
    <Box>
      <Container>
        <Stack pb={"73px"}>
          <img src={banner} alt="img" />
        </Stack>
        <Stack
          width={"705px"}
          justifyContent={"center"}
          alignItems={"center"}
          marginLeft={"auto"}
          marginRight={"auto"}
        >
          <img src={img} alt="img" />
        </Stack>
        <Newsletter />
      </Container>
    </Box>
  );
};
