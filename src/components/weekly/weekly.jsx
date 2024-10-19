import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { PrametrayButton, SeconderyButton } from "../ui/Button/style";
import icon from "../../assets/img/icon.svg";
import img from "../../assets/img/weekly.png";
import img1 from "../../assets/img/icon.svg";
import { IconImg } from "../../assets/icon/icon";
export const WeeklyCard = () => {
  return (
    <Box pb={"150px"}>
      <Container>
        <Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack>
              <Typography variant="h3" mb={"8px"} fontFamily={"Yellowtail"}>
                News
              </Typography>
              <Typography variant="h1" width={"700px"}>
                Discover weekly content about organic food, & more
              </Typography>
            </Stack>
            <Stack>
              <PrametrayButton
                endIcon={
                  <img
                    src={icon}
                    alt="icon"
                    style={{ width: 24, height: 24 }}
                  />
                }
              >
                More News
              </PrametrayButton>
            </Stack>
          </Stack>
          <Stack
            position={"relative"}
            direction={"row"}
            gap={"46px"}
            mt={"48px"}
          >
            <Stack>
              <img src={img} alt="" />
              <Stack
                sx={{
                  position: "absolute",
                  top: "262px",
                  left: "32px",
                  borderRadius: "31px 34px 30px 30px",
                  padding: "46px 57px 60px 57px",
                  width: 613,
                  height: 330,
                  boxShadow: "0 20px 35px 0 rgba(167, 167, 167, 0.25)",
                  background: "#fff",
                }}
              >
                <Stack
                  direction={"row"}
                  gap={"8px"}
                  alignItems={"center"}
                  mb={"15px"}
                >
                  <IconImg />
                  <Typography>By Rachi Card</Typography>
                </Stack>
                <Stack>
                  <Typography variant="body1" mb={"2px"}>
                    The Benefits of Vitamin D & How to Get It
                  </Typography>
                  <Typography variant="p" width={"444px"} mb={"15px"}>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </Typography>
                  <SeconderyButton
                    endIcon={
                      <img
                        src={img1}
                        alt="icon"
                        style={{ width: 24, height: 24 }}
                      />
                    }
                  >
                    Read More
                  </SeconderyButton>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <img src={img} alt="" />
              <Stack
                sx={{
                  position: "absolute",
                  top: "262px",
                  right: "32px",
                  borderRadius: "31px 34px 30px 30px",
                  padding: "46px 57px 60px 57px",
                  width: 613,
                  height: 330,
                  boxShadow: "0 20px 35px 0 rgba(167, 167, 167, 0.25)",
                  background: "#fff",
                }}
              >
                <Stack
                  direction={"row"}
                  gap={"8px"}
                  alignItems={"center"}
                  mb={"15px"}
                >
                  <IconImg />
                  <Typography>By Rachi Card</Typography>
                </Stack>
                <Stack>
                  <Typography variant="body1" mb={"2px"}>
                    The Benefits of Vitamin D & How to Get It
                  </Typography>
                  <Typography variant="p" width={"444px"} mb={"15px"}>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </Typography>
                  <SeconderyButton
                    endIcon={
                      <img
                        src={img1}
                        alt="icon"
                        style={{ width: 24, height: 24 }}
                      />
                    }
                  >
                    Read More
                  </SeconderyButton>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
