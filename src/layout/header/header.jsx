import { Box, Container, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/img/Logo.svg";
import styled from "@emotion/styled";
import { SearchIcon } from "../../assets/icon/search";
import { IconKorzinka } from "../../assets/icon/korzinka";
import { Link } from "react-router-dom";
export const Header = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
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
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#274c5b",
                }}
              >
                Home
              </Link>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#274c5b",
                }}
              >
                About
              </Link>
              <Link
                to="/shop"
                style={{
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#274c5b",
                }}
              >
                Shop
              </Link>
              <Stack direction={"column"} gap={"10px"}>
      <Link
        to="#"
        style={{
          textDecoration: "none",
          fontWeight: 700,
          fontSize: 20,
          color: "#274c5b",
        }}
        onClick={() => setShowSubmenu(!showSubmenu)} // Toggle submenu
      >
        Pages
      </Link>

      {showSubmenu && ( 
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute", // Makes sure submenu appears below "Pages"
            backgroundColor: "#fff",
            padding: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional shadow for dropdown effect
            marginTop: "5px",
            zIndex: 1, // Keeps the submenu above other content
          }}
        >
          <Link
            to="/services"
            style={{
              textDecoration: "none",
              fontWeight: 500,
              fontSize: 18,
              color: "#274c5b",
              marginBottom: "10px",
            }}
          >
            Services
          </Link>
          <Link
            to="/blog"
            style={{
              textDecoration: "none",
              fontWeight: 500,
              fontSize: 18,
              color: "#274c5b",
              marginBottom: "10px",
            }}
          >
            Blog
          </Link>
          <Link
            to="/portfolio"
            style={{
              textDecoration: "none",
              fontWeight: 500,
              fontSize: 18,
              color: "#274c5b",
              marginBottom: "10px",
            }}
          >
            Portfolio
          </Link>
          <Link
            to="/team"
            style={{
              textDecoration: "none",
              fontWeight: 500,
              fontSize: 18,
              color: "#274c5b",
            }}
          >
            Team
          </Link>
        </Box>
      )}
    </Stack>
  


              <Link
                to="/projects"
                style={{
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#274c5b",
                }}
              >
                Projects
              </Link>
              <Link
                to="/news"
                style={{
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#274c5b",
                }}
              >
                News
              </Link>
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
