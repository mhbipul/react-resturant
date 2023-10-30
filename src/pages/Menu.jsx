import React from "react";
import Layout from "../components/Layout/layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { MenuList } from "../data/data";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center'

        }}>
        {MenuList.map((menu) => (
          <Card sx={{maxWidth:"400px"}}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px",display: 'flex',m:2 }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h4" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">
                  {menu.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
