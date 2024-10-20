import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

export const AboutFresh = ({ id, img, title, desc }) => {
  return (
    <Box pt={"90px"} pb={"150px"}>
      <Container>
        <Stack
          sx={{
            borderRadius: "30px",
            width: "257px",
            height: "335px",
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img width={"46px"} src={img} alt="img" />
          <Typography mt={"15px"} mb={"12px"}>
            {title}
          </Typography>
          <Typography variant="p" width={"184px"} textAlign={"center"}>
            {desc}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
