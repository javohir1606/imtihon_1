import { Container } from "@mui/material";
import React from "react";
import { CustomButton, DefoltButton, PrametrayButton, ProductButton, SeconderyButton } from "./style";
import img from "../../../assets/img/icon.svg";
export const ButtonDefault = () => {
  return (
    <Container>
      <CustomButton endIcon={<img src={img} alt="icon" style={{ width: 24, height: 24 }} />}>Default Button</CustomButton>
      <SeconderyButton endIcon={<img src={img} alt="icon" style={{ width: 24, height: 24 }} />}>Default Button</SeconderyButton>
      <PrametrayButton endIcon={<img src={img} alt="icon" style={{ width: 24, height: 24 }} />}>Default Button</PrametrayButton>
      <DefoltButton>Default Button</DefoltButton>
      <ProductButton>Default Button</ProductButton>
    </Container>
  );
};
