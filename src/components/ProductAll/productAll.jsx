import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import { SeconderyButton } from "../ui/Button/style";
import icon from "../../assets/img/icon.svg";
import { ProductAllData } from "../Data/data";
import { useNavigate } from "react-router-dom";
export const ProductAll = () => {
  return (
    <Box bgcolor={"#274c5b"} mb={"12px"}>
      <Container maxWidth="lg">
        <Stack p={"130px"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            gap={"200px"}
            alignItems={"center"}
          >
            <Stack>
              <Typography variant="body2" mb={"8px"} fontFamily={"Yellowtail"}>
                Offer
              </Typography>
              <Typography variant="h5" mb={"50px"}>
                We Offer Organic For You
              </Typography>
            </Stack>
            <Stack>
              <SeconderyButton
                endIcon={
                  <img
                    src={icon}
                    alt="icon"
                    style={{ width: 24, height: 24 }}
                  />
                }
              >
                View All Product
              </SeconderyButton>
            </Stack>
          </Stack>
          <Stack>
            <Grid2 container spacing={2}>
              {ProductAllData.map((item) => {
                const navigate = useNavigate();

                return (
                  <Grid2
                    item
                    key={item.id}
                    xs={6}
                    sm={4}
                    md={3}
                    sx={{
                      marginBottom: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "270px",
                        borderRadius: "30px",
                        background: "#f9f8f8",
                        padding: "30px",
                        
                      }}
                    >
                      <Box>
                        <img
                          src={item.img}
                          alt="img"
                          style={{ width: "100%" }}
                        />
                      </Box>
                      <Stack>
                        <Typography
                          variant="body1"
                          mb={"15px"}
                          sx={{
                            cursor: "pointer",
                            "&:hover": {
                              color: "#7eb693",
                            },
                          }}
                          onClick={() => navigate(`/product/${item.id}`)}
                        >
                          {item.title}
                        </Typography>
                      </Stack>
                      <hr />
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        gap={"15px"}
                      >
                        <Stack
                          direction={"row"}
                          gap="8px"
                          alignItems={"center"}
                        >
                          <Typography variant="h4">${item.cPrice}</Typography>
                          <Typography variant="body1">
                            ${item.pPrice}
                          </Typography>
                        </Stack>
                        <Stack width={"90px"}>
                          <img
                            src={item.rating}
                            alt="rating"
                            style={{ width: "100%" }}
                          />
                        </Stack>
                      </Stack>
                    </Box>
                  </Grid2>
                );
              })}
            </Grid2>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
