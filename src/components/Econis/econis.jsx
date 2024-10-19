import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import iconisImg from "../../assets/img/econis-img.png"
export const EconisCard = () => {
  return (
    <Box>
      <Stack direction={"row"} alignItems={"center"}>
        <Stack width={"50%"}>
          <img src={iconisImg} alt="img" />
        </Stack>
        <Stack position={"relative"} width={"50%"}>
          <Stack
            position={"absolute"}
            top={"-300px"}
            left={"-100px"}
            maxWidth={"770px"}
            sx={{ pl: "65px", pb: "30px", pr: "89px" }}
            borderRadius={"30px"}
            bgcolor="#fff"
            padding={"78px"}
          >
            <Typography
              fontFamily={"Yellowtail"}
              variant="h3"
            >
              Eco Friendly
            </Typography>
            <Typography mb={"35px"} variant="h1">
              Econis is a Friendly Organic Store
            </Typography>
            <Box>
              <Stack>
                <Typography fontWeight={500} variant="h6">
                  Start with Our Company First
                </Typography>
                <Typography mb={"35px"} variant="p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </Typography>
              </Stack>
              <Stack>
                <Typography fontWeight={500} variant="h6">
                  Start with Our Company First
                </Typography>
                <Typography variant="p" mb={"35px"}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </Typography>
              </Stack>
              <Stack>
                <Typography fontWeight={500} variant="h6">
                  Start with Our Company First
                </Typography>
                <Typography  variant="p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
