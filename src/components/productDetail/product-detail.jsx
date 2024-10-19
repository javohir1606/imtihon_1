import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsData } from "../Data/data";
import { Newsletter } from "../../pages/Newsletter/Newsletter";
import banner1 from "../../assets/img/banner1.png";
import {
  CustomButton,
  DefoltButton,
  PrametrayButton,
} from "../ui/Button/style";
import icon from "../../assets/img/icon.svg";
export const ProductDetail = () => {
  const { id } = useParams();

  const product = ProductsData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <img
        src={banner1}
        alt="img"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <Container>
        <Box pt={"114px"} pb={"90px"}>
          <Stack direction={"row"} gap={"83px"} alignItems={"center"}>
            <Stack
              bgcolor={"#fff"}
              sx={{
                width: 500,
                height: 500,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <img
                src={product.img}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Stack>
            <Stack>
              <Typography variant="h1" mb={"8px"}>
                {product.title}
              </Typography>
              <img width={"110px"} src={product.rating} alt="" />
              <Stack
                direction={"row"}
                mt={"10px"}
                alignItems={"center"}
                gap={"10px"}
              >
                <Typography variant="h4">Price: ${product.cPrice}</Typography>
                <Typography> ${product.pPrice}</Typography>
              </Stack>
              <Typography mt={"27px"} mb={"35px"} width={"658px"} variant="p">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </Typography>
              <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <Typography variant="body1">Quantity :</Typography>
                </Link>
                <PrametrayButton sx={{ width: "134px", height: "84" }}>
                  1
                </PrametrayButton>
                <CustomButton
                  endIcon={
                    <img
                      src={icon}
                      alt="icon"
                      style={{ width: 24, height: 24 }}
                    />
                  }
                >
                  Add To Cart
                </CustomButton>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Box pb={"140px"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={"20px"}
            justifyContent={"center"}
            mb={"27px"}
          >
            <DefoltButton sx={{ width: "363px" }}>
              Product Description
            </DefoltButton>
            <PrametrayButton sx={{ border: "none", bgcolor: "#eff6f1" }}>
              Additional Info
            </PrametrayButton>
          </Stack>
          <Stack>
            <Typography variant="p" textAlign={"center"} width={"1137px"}>
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,
              ecology, and care. We aim to give our customers a healthy
              chemical-free meal for perfect nutrition. It offers about 8–10%
              carbs. Simple sugars — such as glucose and fructose — make up 70%
              and 80% of the carbs in raw.
            </Typography>
          </Stack>
        </Box>
        <Newsletter />
      </Container>
    </Box>
  );
};
