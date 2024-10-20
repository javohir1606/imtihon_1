import { Box, Container, Grid2, Stack } from "@mui/material";
import React from "react";
import banner from "../../assets/img/shop-banner.png";
import { AboutData } from "../../components/Data/data";
import { ShopCard } from "../../components/shop-card/shop-card";
import { Newsletter } from "../Newsletter/Newsletter";
export const Shop = () => {
  return (
    <Box>
      <Stack pb={"90px"}>
        <img src={banner} alt="img" />
      </Stack>

      <Box pb={"200px"}>
        <Container xs={"lg"}>
          <Grid2
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {AboutData.map((item) => (
              <Grid2
                key={item.id}
                sx={{
                  flex: "1 1 calc(25% - 20px)",
                  marginBottom: "20px",
                }}
              >
                <ShopCard
                  img={item.img}
                  title={item.title}
                  cPrice={item.cPrice}
                  pPrice={item.pPrice}
                  rating={item.rating}
                  id={item.id}
                />
              </Grid2>
            ))}
          </Grid2>
        </Container>
          <Newsletter />
      </Box>
    </Box>
  );
};
