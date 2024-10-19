import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 900,
      lg: 1450,
      xl: 1595,
    },
  },
  typography: {
    body1: {
      fontWeight: "800",
      fontSize: "25px",
      color: "#274c5b",
      textDecoration: "none",
    },
    body2: {
      fontWeight: 400,
      fontSize: 36,
      color: "#7eb693",
    },
    h3: {
      fontWeight: "500",
      fontSize: "36px",
      color: "#68a47f",
    },
    h1: {
      fontWeight: "800",
      fontSize: "50px",
      color: "#274c5b",
    },
    p: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "165%",
      color: "#525c60",
    },
    h2: {
      fontWeight: "800",
      fontSize: "50px",
      color: "#274c5b",
    },
    h4: {
      fontWeight: 700,
      fontSize: 18,
      color: "#525c60",
    },
    h5: {
      fontWeight: 700,
      fontSize: 40,
      color: "#fff",
    },
  },
});
