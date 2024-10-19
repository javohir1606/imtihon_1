import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/img/newslatteer.png";
import { DefoltButton } from "../../components/ui/Button/style";
export const Newsletter = () => {
  return (
    <Box pt={"100px"} pb={"150px"}>
      <Container>
        <Stack
          sx={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            borderRadius: "20px",
            backgroundPosition: "center",
          }}
        >
          <Stack p={"105px"} direction={"row"} justifyContent={"space-between"}>
            <Stack>
              <Typography variant="h5" width={"290px"}>
                Subscribe to our Newsletter
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={"6px"} alignItems={"center"}>
              <TextField
                sx={{ bgcolor: "#fff" }}
                placeholder="Your Email Address"
                InputProps={{
                  sx: {
                    fontFamily: "var(--font-family)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "18px",
                    color: "#ababab",
                  },
                }}
              />

              <DefoltButton>Subscribe</DefoltButton>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
