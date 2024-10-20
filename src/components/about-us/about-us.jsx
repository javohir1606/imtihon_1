import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/img/about.png";
import { CustomButton } from "../ui/Button/style";
import icon from "../../assets/img/icon.svg";
import { Icon1 } from "../../assets/icon/icon1";
import { Icon2 } from "../../assets/icon/icon2";
export const AboutUs = () => {
  return (
    <Box pt={"70px"}>
      <Container maxWidth="lg">
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={"50px"}>
          <Stack width={"1000px"}>
            <img src={img} alt="" />
          </Stack>
          <Stack>
            <Typography variant="body2" mb={"8px"} fontFamily={"Yellowtail"}>
              About Us
            </Typography>
            <Typography mb={"14px"} variant="h1" width={"500px"}>
              We Believe in Working Accredited Farmers
            </Typography>
            <Typography variant="p" mb={"48px"}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </Typography>
            <Typography variant="p" mb={"48px"}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </Typography>
          <Stack direction={"row"} gap={"65px"} alignItems={"center"} mb={"58px"} justifyContent={"space-between"}>
          <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"19px"}
              mb={"30px"}
            >
              <Icon1 />
              <Stack>
                <Typography width={"226px"} variant="body1">
                  Modern Agriculture Equipment
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"19px"}
              mb={"46px"}
            >
              <Icon2 />
              <Stack>
                <Typography variant="body1" width={"226px"}>
                  No growth hormones are used
                </Typography>
              </Stack>
            </Stack>
          </Stack>
            <CustomButton
              endIcon={
                <img src={icon} alt="icon" style={{ width: 24, height: 24 }} />
              }
            >
              Shop Now
            </CustomButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
