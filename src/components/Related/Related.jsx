import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { RelatedData } from "../Data/data";
import { Link } from "react-router-dom";

export const RelatedCard = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Stack mb={"40px"} textAlign={"center"}>
          <Typography variant="h1">Related Products</Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems={"center"}
          spacing={"20px"}
          justifyContent="center"
        >
          {RelatedData.map((item, id) => (
            <Box
              key={item.id}
              sx={{
                borderRadius: "30px",
                width: 335,
                background: "#f9f8f8",
                padding: "30px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                width={"310px"}
                height={"290px"}
                src={item.img}
                alt={item.title}
              />

              <Link
                to={`/product/detail/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  mb={"13px"}
                  variant="body1"
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      color: "#7EB693",
                    },
                  }}
                >
                  {item.title}
                </Typography>
              </Link>

              <hr />
              <Stack
                mt={"6px"}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
                  <Typography variant="h4">${item.cPrice}</Typography>
                  <Typography variant="">${item.pPrice}</Typography>
                </Stack>
                <Stack width={"90px"}>
                  <img src={item.rating} alt="" />
                </Stack>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
