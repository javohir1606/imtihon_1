import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/img/serves.png";
import { ServesIcon } from "../../assets/icon/serves";
import { PrametrayButton } from "../ui/Button/style";
import icon from "../../assets/img/icon.svg"
export const ServesCard = () => {
  return (
    <Box py={"150px"}>
      <Container>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Typography variant="h3" fontFamily={"Yellowtail"}>
            What we Grow
          </Typography>
          <Typography width={"482px"} textAlign={"center"} variant="h1">
            Better Agriculture for Better Future
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
          <Stack>
            <Stack>
              <Stack mb={"5px"} alignItems={"end"} textAlign={"right"}>
                <ServesIcon />
              </Stack>
              <Typography textAlign={"right"} variant="body1" mb={"5px"}>
                Dairy Products
              </Typography>
              <Typography variant="p" textAlign={"right"} width={"396px"}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </Typography>
            </Stack>
            <Stack>
              <Stack mb={"5px"} alignItems={"end"} textAlign={"right"}>
                <ServesIcon />
              </Stack>
              <Typography textAlign={"right"} variant="body1" mb={"5px"}>
                Dairy Products
              </Typography>
              <Typography variant="p" textAlign={"right"} width={"396px"}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </Typography>
            </Stack>
            <Stack>
              <Stack mb={"5px"} alignItems={"end"} textAlign={"right"}>
                <ServesIcon />
              </Stack>
              <Typography textAlign={"right"} variant="body1" mb={"5px"}>
                Dairy Products
              </Typography>
              <Typography variant="p" textAlign={"right"} width={"396px"}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <img src={img} alt="" />
          </Stack>
          <Stack>
          <Stack>
            <Stack mb={"5px"}>
            <ServesIcon/>
            </Stack>
            <Typography textAlign={"start"} variant="body1" mb={"5px"}>Dairy Products</Typography>
            <Typography variant="p" textAlign={"start"} width={"396px"}>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</Typography>
          </Stack>
          <Stack>
            <Stack mb={"5px"}>
            <ServesIcon/>
            </Stack>
            <Typography textAlign={"start"} variant="body1" mb={"5px"}>Dairy Products</Typography>
            <Typography variant="p" textAlign={"start"} width={"396px"}>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</Typography>
          </Stack>
          <Stack>
            <Stack mb={"5px"}>
            <ServesIcon/>
            </Stack>
            <Typography textAlign={"start"} variant="body1" mb={"5px"}>Dairy Products</Typography>
            <Typography variant="p" textAlign={"start"} width={"396px"}>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</Typography>
          </Stack>
          </Stack>
        </Stack>
        <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <PrametrayButton endIcon={<img src={icon} alt="icon" style={{ width: 24, height: 24 }} />}>Explore More</PrametrayButton>
        </Stack>
      </Container>
    </Box>
  );
};
