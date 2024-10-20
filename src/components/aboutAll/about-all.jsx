import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { ProductButton } from '../ui/Button/style'
import { Icon3 } from '../../assets/icon/icon3'
import img from "../../assets/img/about1.png"
export const AboutAll = () => {
  return (
    <Box pb={"90px"} bgcolor={"#F9F8F8"}>
      <Container>
        <Stack direction={"row"} alignItems={"center"} gap={"51px"} p={"120px"}>
            <Stack> 
              <Typography variant='h3' mb={"6px"} fontFamily={"Yellowtail"}>Why Choose us?</Typography>
              <Typography variant='h1' width={"524px"} mb={"25px"}>We do not buy from the
              open market & traders.</Typography>
              <Typography variant='p' mb={"35px"} width={"650px"}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</Typography>
              <ProductButton startIcon={<Icon3 width="30px"/>}>100% Natural Product</ProductButton>
              <Typography variant='p' ml={"60px"} mt={"12px"} width={"504px"} mb={"24px"}>Simply dummy text of the printing and typesetting industry Lorem Ipsum</Typography>
              <ProductButton startIcon={<Icon3 width="30px"/>}> Increases resistance</ProductButton>
              <Typography variant='p' ml={"60px"} mt={"12px"} width={"504px"} mb={"24px"}>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</Typography>
            </Stack>
            <Stack>
              <img src={img} alt="img" />
            </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

