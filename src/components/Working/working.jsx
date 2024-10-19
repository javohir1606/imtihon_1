import { Box, Container, Icon, Stack, Typography } from '@mui/material'
import img from "../../assets/img/photo.png"
import React from 'react'
import icon from "../../assets/img/Icon1.svg"
import { CustomButton, PrametrayButton } from '../ui/Button/style'
import Icon2 from "../../assets/img/icon.svg"
export const WorkingCard = () => {
  return (
    <Box pb={"150px"} bgcolor={"#f7f6f6"}>
      <Container>
        <Stack direction={"row"} gap={"30px"}>
          <Stack width={"700px"}>
            <img src={img} alt="" />
          </Stack>
          <Stack>
            <Typography variant='body2' mb={"8px"} fontFamily={"Yellowtail"} >About Us</Typography>
            <Typography mb={"14px"} variant='h1' width={"500px"}>We Believe in Working
            Accredited Farmers</Typography>
            <Typography variant="p" mb={"48px"}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"19px"} mb={"30px"}>
              <img src={icon} alt="" />
              <Stack>
                <Typography variant='body1'>Organic Foods Only</Typography>
                <Typography variant='p'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={"19px"} mb={"46px"}>
              <img src={icon} alt="" />
              <Stack>
                <Typography variant='body1'>Organic Foods Only</Typography>
                <Typography variant='p'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Typography>
              </Stack>
            </Stack>
            <CustomButton endIcon={<img src={Icon2} alt="icon" style={{ width: 24, height: 24 }} />}>Shop Now</CustomButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

