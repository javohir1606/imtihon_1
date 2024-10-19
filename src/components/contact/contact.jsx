import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/img/counter.png";
import img1 from "../../assets/img/img.png";
import { ContactData } from "../Data/data";
export const ContactCard = () => {
  return (
    <>
      <Box
        sx={{
          p: "164px",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Stack>
            <Typography
              variant="body2"
              mb={"8px"}
              textAlign={"center"}
              fontFamily={"Yellowtail"}
            >
              Testimonial
            </Typography>
            <Typography variant="h1" mb={"60px"} textAlign={"center"}>
              What Our Customer Saying?
            </Typography>
            <Stack width={"115px"} justifyContent={"center"} mx={"auto"}>
              <img src={img1} alt="img" />
            </Stack>
            <Stack mt={"20px"} mb={"25px"} mx={"auto"}>
              <Rating value={3} readOnly />
            </Stack>
            <Typography
              mb={"20px"}
              variant="p"
              width={"720px"}
              textAlign={"center"}
              mx={"auto"}
            >
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </Typography>
            <Typography variant="body1" textAlign={"center"}>
              Sara Taylor
            </Typography>
            <Typography textAlign={"center"} variant="p">
              Consumer
            </Typography>
          </Stack>
          <hr
            style={{
              width: "1000px",
              backgroundColor: "blueGrey",
              marginTop: "102px",
              marginBottom: "102px",
            }}
          />
          <Stack direction="row" justifyContent={"center"} gap={"62px"} spacing={2}>
            {ContactData.map((item, index) => (
              <Box
                key={index}
                width={"221px"}
                height={"221px"}
                sx={{
                  borderRadius: "50%",
                  border: "10px solid #7eb693",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  width={"200px"}
                  height={"203px"}
                  sx={{
                    borderRadius: "50%",
                    border: "10px solid #fcfcfc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    width={"180px"}
                    height={"185px"}
                    sx={{
                      borderRadius: "50%",
                      bgcolor: "#f1f1f1",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography>{item.title}</Typography>
                    <Typography>{item.desc}</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};
