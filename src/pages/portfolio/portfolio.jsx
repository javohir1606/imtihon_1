import { Box } from '@mui/material'
import React from 'react'
import banner from "../../assets/img/banner9.png"
import { Newsletter } from '../Newsletter/Newsletter'
export const PortfolioCard = () => {
  return (
   <Box>
    <img src={banner} alt="" />
    <Newsletter />
   </Box>
  )
}

