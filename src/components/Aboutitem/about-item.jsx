import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/img/ImageA.png";
import img1 from "../../assets/img/ImageB.png";
import img2 from "../../assets/img/ImageC.png";
import img4 from "../../assets/img/ImageG.png";
export const AboutItem = () => {
  return (
    <Box bgcolor={"#274c5b"} py={"188px"}>
      <Container>
        <Stack textAlign={"center"}>
          <Typography variant="h3" fontFamily={"Yellowtail"}>
            About Us
          </Typography>
          <Typography variant="h5" mb={"33px"}>
            What We Offer for You
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={"21px"}>
          <Stack textAlign={"center"}>
            <img src={img} alt="img" />
            <Typography
              mt={"13px"}
              sx={{ fontWeight: 500, fontSize: 25, color: "#fff" }}
            >
              Spicy
            </Typography>
          </Stack>
          <Stack textAlign={"center"}>
            <img src={img1} alt="img" />
            {/* <Typography mt={"24px"} sx={{ fontWeight: 500, fontSize: 25, color: "#fff" }}>
            Nuts & Feesd
            </Typography> */}
          </Stack>
          <Stack textAlign={"center"}>
            <img src={img2} alt="img" />
            <Typography
              mt={"24px"}
              sx={{ fontWeight: 500, fontSize: 25, color: "#fff" }}
            >
              Fruits
            </Typography>
          </Stack>
          <Stack textAlign={"center"}>
            <img src={img} alt="img" />
            <Typography
              mt={"13px"}
              sx={{ fontWeight: 500, fontSize: 25, color: "#fff" }}
            >
            Vegetable
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
