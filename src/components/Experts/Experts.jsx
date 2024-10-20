import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/img/Image.png";
import img1 from "../../assets/img/Image1.png";
import img2 from "../../assets/img/Image2.png";
import { FeecbookIcon } from "../../assets/icon/feecbook";
import { TweterIcon } from "../../assets/icon/tweter";
import { Icon4 } from "../../assets/icon/icon4";
export const Experts = () => {
  return (
    <Box bgcolor={"#f7f7f7"} pb={"150px"}>
      <Container>
        <Stack>
          <Typography
            textAlign={"center"}
            fontFamily={"Yellowtail"}
            variant="h3"
          >
            Team
          </Typography>
          <Typography textAlign={"center"} mb={"16px"} variant="h1">
            Our Organic Experts
          </Typography>
          <Stack alignItems={"center"} justifyContent={"center"}>
            <Typography
              variant="p"
              mb={"42px"}
              width={"852px"}
              textAlign={"center"}
            >
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={"27px"}>
          <Stack
            p={"28px"}
            width={"449px"}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "25px",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <img
              style={{
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
              }}
              src={img}
              alt="img"
            />
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack>
                <Typography mt={"35px"} variant="body1">
                  Giovani Bacardo
                </Typography>
                <Typography mb={"34px"} variant="h3" fontFamily={"Yellowtail"}>
                  Farmer
                </Typography>
              </Stack>
              <Stack mt={"50px"} direction={"row"} alignItems={"center"}>
              
                <IconButton sx={{ width: "50px", height: "50px" }}>
                  <FeecbookIcon />
                </IconButton>
                <IconButton sx={{ width: "50px", height: "50px" }}>
                  <TweterIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            p={"28px"}
            width={"449px"}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "25px",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <img
              style={{
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
              }}
              src={img1}
              alt="img"
            />
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack>
                <Typography mt={"35px"} variant="body1">
                  Giovani Bacardo
                </Typography>
                <Typography mb={"34px"} variant="h3" fontFamily={"Yellowtail"}>
                  Farmer
                </Typography>
              </Stack>
              <Stack mt={"50px"}  direction={"row"} alignItems={"center"}>
              <IconButton>
                  <Icon4/>
                </IconButton>
                <IconButton sx={{ width: "50px", height: "50px" }}>
                  <FeecbookIcon />
                </IconButton>
                <IconButton sx={{ width: "50px", height: "50px" }}>
                  <TweterIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            p={"28px"}
            width={"449px"}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "25px",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <img
              style={{
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
              }}
              src={img2}
              alt="img"
            />
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack>
                <Typography mt={"35px"} variant="body1">
                  Giovani Bacardo
                </Typography>
                <Typography mb={"34px"} variant="h3" fontFamily={"Yellowtail"}>
                  Farmer
                </Typography>
              </Stack>
              <Stack direction={"row"} mt={"50px"} alignItems={"center"}>
                <IconButton>
                  <Icon4 />
                </IconButton>
                <IconButton sx={{ width: "50px", height: "50px" }}>
                  <FeecbookIcon />
                </IconButton>
                <IconButton sx={{ width: "50px", height: "50px" }}>
                  <TweterIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
