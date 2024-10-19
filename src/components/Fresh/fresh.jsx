import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/img/img.svg";
import img1 from "../../assets/img/img1.svg";
export const FreshMenu = () => {
  return (
    <Box pb={"150px"}>
      <Container>
        <Stack direction={"row"} gap={"36px"} alignItems={"center"}>
          <Box
            p={"100px"}
            pl={"45px"}
            sx={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              width: 682,
              height: 367,
            }}
          >
            <Typography fontFamily={"Yellowtail"} color="#fff">
              Natural!!
            </Typography>
            <Typography
              fontSize={"40px"}
              fontWeight={"800px"}
              width={"277px"}
              color="#fff"
            >
              Get Garden Fresh Fruits
            </Typography>
          </Box>
          <Box
            p={"109px"}
            pl={"50px"}
            sx={{
              backgroundImage: `url(${img1})`,
              backgroundRepeat: "no-repeat",
              width: 682,
              height: 367,
            }}
          >
            <Typography fontFamily={"Yellowtail"} color="#7eb693">
              Offer!!
            </Typography>
            <Typography
              fontSize={"40px"}
              fontWeight={"800px"}
              width={"270px"}
              color="#274c5b"
              mb={"24px"}
            >
              Get 10% off on Vegetables
            </Typography>
          
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
