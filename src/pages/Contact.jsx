import React from 'react'
import Layout from '../components/Layout/layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const contact = () => {
  return (
    <Layout>
        <Box>
          <Typography variant='h4' sx={{
            textAlign:"center" ,
            my:"10px",
            ml:"10px",
            "& h4":{
              fontWeight: "bold",
              mb: 2
            }
            
            }}>
            Contact My Resturant
          </Typography>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus aspernatur necessitatibus laboriosam eaque in dolore tempora tenetur velit corporis corrupti, quidem minima ad maxime cupiditate sint id est. Tempore facilis asperiores suscipit? Facilis obcaecati ut minus ad excepturi atque optio!</p>
        </Box>
        <Box sx={{m:4,width:"600px",ml:5,
         "@media (max-width:600px)":{
          width:"300px"
        }}}>
          <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{backgroundColor:"black",color:"white"}} align='center'> Contact Details </TableCell>
                </TableRow>

              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'red',pt:1}} />180-88-99-66-00(tollfree)
                  </TableCell>
                  
                </TableRow>
                <TableRow>
                <TableCell>
                    <EmailIcon sx={{color:'skyblue',pt:1}} />mhbipul99bd@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <CallIcon sx={{color:'green',pt:1}} />+8801956480877
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

          </TableContainer>
        </Box>
    </Layout>
  )
}

export default contact