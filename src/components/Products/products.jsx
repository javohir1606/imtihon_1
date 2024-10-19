import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // React Router'dan foydalanamiz
import { useParams } from "react-router-dom";
import { ProductsData } from "../Data/data";
import { CustomButton, SeconderyButton } from "../ui/Button/style";
export const ProductsItem = () => {
  return (
    <Box pt={"194px"} pb={"40px"}>
      <Container>
        <Stack>
          <Typography
            variant="body2"
            mb={"8px"}
            fontFamily={"Yellowtail"}
            textAlign={"center"}
          >
            Categories{" "}
          </Typography>
          <Typography variant="h2" textAlign={"center"}>
            Our Products
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export const ProductsCard = ({ id, img, title, cPrice, pPrice, rating }) => {
  return (
    <>
      <Container>
        <Box
          p={"30px"}
          sx={{
            borderRadius: 5,
            width: 335,
            background: "#f9f8f8",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box>
            <img width={"320px"} height={"320px"} src={img} alt="img" />
          </Box>
          <Link style={{ textDecoration: "none" }} to={`product/detail/${id}`}>
            <Typography
              mb={"13px"}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#7eb693",
                },
              }}
            >
              {title}
            </Typography>
          </Link>
          <hr />
          <Stack
            mt={"6px"}
            mb={"17px"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"} gap={"7px"} alignItems={"center"}>
              <Typography variant="h4">${cPrice}</Typography>
              <Typography variant="body1">${pPrice}</Typography>
            </Stack>
            <img width={"100px"} src={rating} alt="" />
          </Stack>
          <Stack position={"relative"}>
            <Typography
              sx={{
                position:"absolute",
                top:"-440px",
                cursor:"pointer",
                fontWeight: 600,
                fontSize: 15,
                textAlign: "center",
                color: "#fff",
                borderRadius: 8,
                padding: "5px 12px 6px 12px",
                width: 96,
                padding: "5px 12px",
                background: "#274c5b",
              }}
            >
              Vegetable
            </Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
