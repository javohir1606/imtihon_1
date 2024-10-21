import { Box } from '@mui/material'
import React from 'react'
import banner from "../../assets/img/Banner10.png"
import { Newsletter } from '../Newsletter/Newsletter'
export const TeamCard = () => {
  return (
   <Box>
    <img src={banner} alt="img" />
    <Newsletter />
   </Box>
  )
}

