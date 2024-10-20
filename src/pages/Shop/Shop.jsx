import { Box, Stack } from "@mui/material";
import React from "react";
import banner from "../../assets/img/shop-banner.png";
export const Shop = () => {
  return (
    <Box>
      <Stack pb={"90px"}>
        <img src={banner} alt="img" />
      </Stack>
    </Box>
  );
};
