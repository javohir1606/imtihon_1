import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/img/Logo.svg";
import { IstagramIcon } from "../../assets/icon/istagram";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <Box pt={"100px"}>
      <Container>
        <Stack
          pb={"130px"}
          textAlign={"center"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack
            direction={"row"}
            spacing={0}
            borderRight={"2px solid grey"}
            pr={"51px"}
          >
            <Stack>
              <Typography textAlign={"right"} mb={"32px"} variant="body1">
                Contact Us
              </Typography>
              <Typography mb={"8px"} textAlign={"right"} variant="h4">
                Email
              </Typography>
              <Link
                style={{
                  textDecoration: "none",
                  textAlign: "right",
                  color: "#525c60",
                  fontSize: "15px",
                  fontWeight: "400",
                  marginBottom: "15px",
                }}
              >
                needhelp@Organia.com
              </Link>
              <Typography mb={"8px"} textAlign={"right"} variant="h4">
                Phone
              </Typography>
              <Link
                style={{
                  textDecoration: "none",
                  textAlign: "right",
                  color: "#525c60",
                  fontSize: "15px",
                  fontWeight: "400",
                  marginBottom: "15px",
                }}
              >
                666 888 888
              </Link>
              <Typography mb={"8px"} textAlign={"right"} variant="h4">
                Address
              </Typography>
              <Link
                style={{
                  textDecoration: "none",
                  textAlign: "right",
                  color: "#525c60",
                  fontSize: "15px",
                  fontWeight: "400",
                  marginBottom: "15px",
                }}
              >
                88 road, borklyn street, USA
              </Link>
            </Stack>
          </Stack>

          <Stack alignItems="center">
            <img src={logo} alt="" />
            <Typography
              variant="p"
              mb={"49px"}
              mt={"23px"}
              width={"543px"}
              textAlign={"center"}
            >
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing{" "}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"15px"}>
              <IstagramIcon />
              <IstagramIcon />
              <IstagramIcon />
              <IstagramIcon />
            </Stack>
          </Stack>
          <Stack borderLeft={"2px solid grey"} pl={"51px"} textAlign="start">
            <Typography textAlign={"left"} mb={"24px"} variant="body1">
              Utility Pages
            </Typography>
            <Stack>
              <Typography  mb={"15px"} variant="p"> Style Guide</Typography>
              <Typography  mb={"15px"} variant="p">404 Not Found</Typography>
              <Typography  mb={"15px"} variant="p">Password Protected</Typography>
              <Typography  mb={"15px"} variant="p"> Licences</Typography>
              <Typography  mb={"15px"} variant="p">Changelog</Typography>
            </Stack>
          </Stack>
        </Stack>
        <hr />
        <Stack py={"17px"}>
          <Typography textAlign={"center"} variant="p">
            Copyright © Organick | Designed by VictorFlow Templates - Powered by
            Webflow
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
