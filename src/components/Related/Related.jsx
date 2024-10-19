import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { RelatedData } from "../Data/data";

export const RelatedCard = () => {
  return (
    <Box>
      <Container>
        <Stack>
          {RelatedData.map((item) => (
            <Box key={item.id}>
              <img src={item.img} alt={item.title} />
              <Typography>{item.title}</Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
