import { Box, Container, IconButton, Stack } from "@mui/material";
import React from "react";
import logo from "../../assets/img/Logo.svg";
import styled from "@emotion/styled";
import { SearchIcon } from "../../assets/icon/search";
import { IconKorzinka } from "../../assets/icon/korzinka";
export const Header = () => {
  const LinkData = styled.p`
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 20px;
    color: #274c5b;
    text-decoration: none;
  `;
  return (
    <Box pt={"69px"} pb={"69px"}>
      <Container maxWidth="xl">
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack alignItems={"center"} gap={"150px"} direction={"row"}>
            <Stack width={"198px"}>
              <img src={logo} alt="logo" />
            </Stack>
            <Stack direction={"row"} gap={"30px"}>
              <LinkData>Home</LinkData>
              <LinkData> About </LinkData>
              <LinkData>Pages </LinkData>
              <LinkData>Shop</LinkData>
              <LinkData>Projects</LinkData>
              <LinkData>News</LinkData>
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={"18px"} alignItems={"center"}>
            <Stack
              direction={"row"}
              gap={"30px"}
              borderRadius={"33px"}
              border={"1px solid #f1efef"}
              pt={"5px"}
              pb={"5px"}
              pr={"6px"}
              pl={"26px"}
            >
              <input
                style={{
                  border: "none",
                  bgcolor: "#FAFAFA",
                  outline: "none",
                }}
              />
              <IconButton
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#7eb693",
                  width: "57px",
                  height: "57px",
                }}
              >
                <SearchIcon />
              </IconButton>
            </Stack>
            <Stack
              direction={"row"}
              border={"1px solid #e0e0e0"}
              borderRadius={"33px"}
              gap={"10px"}
              pr={"10px"}
              pl={"23px"}
              alignItems={"center"}
            >
              <IconButton
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#274c5b",
                  width: "56px",
                  height: "56px",
                }}
              >
                <IconKorzinka />
              </IconButton>
              <LinkData>Cart (0)</LinkData>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
