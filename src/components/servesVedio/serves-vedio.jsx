import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/img/serves1.png";
import { VedioIcon } from "../../assets/icon/vedio";
export const ServesVedio = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Stack
          p={"179px"}
          pb={"590px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h3" fontFamily={"Yellowtail"}>
            Organic Only
          </Typography>
          <Typography variant="h1" mb={"24px"}>
            Everyday Fresh & Clean
          </Typography>
          <Typography
            textAlign={"center"}
            mb={"50px"}
            variant="p"
            width={"671px"}
          >
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the{" "}
          </Typography>
          <Stack>
            <IconButton >
              <VedioIcon  sx={{ textAlign: "center", alignItems: "center"}}/>
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
