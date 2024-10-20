import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import banner from "../../assets/img/banner5.png";
import img from "../../assets/img/Image3.png";
import img1 from "../../assets/img/icon.svg";
import { CustomButton } from "../ui/Button/style";
import { Newsletter } from "../../pages/Newsletter/Newsletter";
export const Project = () => {
  return (
    <Box>
      <Container>
        <Stack pb={"73px"}>
          <img src={banner} alt="img" />
        </Stack>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack
            sx={{
              borderRadius: 30,
              padding: "35px 31px",
              boxShadow: "0 39px 37px 0 rgba(183, 177, 177, 0.25)",
              background: "#fff",
            }}
          >
            <Stack p={"35px"} direction={"row"} gap={"32px"}>
              <Stack>
                <img src={img} alt="" />
              </Stack>
              <Stack>
                <Typography mb={"23px"} variant="body1">
                  Password
                </Typography>
                <TextField
                  placeholder="Enter Your Password"
                  InputProps={{
                    style: {
                      fontFamily: "var(--font-family)",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#ababab",
                    },
                  }}
                  sx={{
                    width: "569px",
                    border: "1px solid #7eb693",
                    background: "#fff",
                    "& .MuiInputBase-input::placeholder": {
                      fontFamily: "var(--font-family)",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#ababab",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#7eb693",
                      },
                      "&:hover fieldset": {
                        borderColor: "#7eb693",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7eb693",
                      },
                    },
                  }}
                />
                <Stack mt={"26px"}>
                  <CustomButton
                    endIcon={
                      <img
                        src={img1}
                        alt="Icon"
                        style={{ width: "24px", height: "24px" }}
                      />
                    }
                  >
                    Send Now
                  </CustomButton>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>

        <Newsletter/>
      </Container>
    </Box>
  );
};
