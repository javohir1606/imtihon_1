import { Box } from '@mui/material'
import React from 'react'
import banner from "../../assets/img/Banner8.png"
import { Newsletter } from '../Newsletter/Newsletter'
export const BlogCard = () => {
  return (
   <Box>
     <img src={banner} alt="img" />
     <Newsletter/>
   </Box>
  )
}

