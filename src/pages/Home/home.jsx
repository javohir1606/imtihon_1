import React from "react";
import { Banner } from "../../components/banner/banner";
import { FreshMenu } from "../../components/Fresh/fresh";
import { WorkingCard } from "../../components/Working/working";
import { ProductsCard, ProductsItem } from "../../components/Products/products";
import { ProductsData } from "../../components/Data/data";
import { Box, Container, Grid2, Stack } from "@mui/material";
import { CustomButton } from "../../components/ui/Button/style";
import img from "../../assets/img/icon.svg";
import { ContactCard } from "../../components/contact/contact";
import { ProductAll } from "../../components/ProductAll/productAll";
import { EconisCard } from "../../components/Econis/econis";
import { OrganicCard } from "../../components/Organic/Organic";
import { WeeklyCard } from "../../components/weekly/weekly";
import { Newsletter } from "../Newsletter/Newsletter";
export const Home = () => {
  return (
    <div>
      <Banner />
      <FreshMenu />
      <WorkingCard />
      <ProductsItem />
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
            {ProductsData.map((item) => (
              <Grid2
                key={item.id}
                sx={{
                  flex: "1 1 calc(25% - 20px)",
                  marginBottom: "20px",
                }}
              >
                <ProductsCard
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
          <Stack direction={"row"} justifyContent={"center"}>
            <CustomButton
              sx={{ mt: "100px" }}
              endIcon={
                <img src={img} alt="icon" style={{ width: 24, height: 24 }} />
              }
            >
              Load More
            </CustomButton>
          </Stack>
        </Container>
      </Box>
      <ContactCard />
      <ProductAll />
      <EconisCard />
      <OrganicCard />
      <WeeklyCard/>
      <Newsletter />
    </div>
  );
};
