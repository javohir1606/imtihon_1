import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const ShopCard = ({id, img, title, cPrice, pPrice, rating}) => {
  return (
    <Box>
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
          <Link style={{ textDecoration: "none" }} to={`/product/detail/${id}`}>
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
            {/* <Typography
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
            </Typography> */}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

