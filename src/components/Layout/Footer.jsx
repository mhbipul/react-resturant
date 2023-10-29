import React from 'react'
import { Box, Typography } from  "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:"center", backgroundColor:"black",color:"white",p:3}}>
        <Box sx={{my:3, "& svg":{
            fontSize:'60px',
            cursor:"pointer",
            mr:2
        },
        "& svg:hover":{
            color:'goldenrod',
            transform:"translateX(5px)",
            transition:"all 400ms"
        }}}>
            {/* icon  */}
            <InstagramIcon />
            <FacebookIcon />
            <GitHubIcon />
            <YouTubeIcon />

        </Box>
        <Typography variant='h5' sx={{"@media (max-width:600px)":{fontSize:"1rem"}}}>
            All Rights Reserved by &copy; MHB
        </Typography>
    </Box>
    </>
  )
}

export default Footer;