import React, { useState } from "react";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";

import "../../styles/HeaderStyle.css";
import MenuIcon from "@mui/icons-material/Menu";

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        component="div"
        color={"goldenrod"}
        variant="h6"
        sx={{ flexGrow: 1 ,my:'2px'}}
      >
        <StoreIcon />
        My Resturant
      </Typography>
      <Divider />

      <ul className="mobile-navigation">
        <li>
          <Link to={"/"}> Home </Link>
        </li>
        <li>
          <Link to={"/menu"}> Menu </Link>
        </li>
        <li>
          <Link to={"/contact"}> Contact </Link>
        </li>
        <li>
          <Link to={"/about"}> About </Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
             
              <MenuIcon />
            </IconButton>
            <Typography
              component="div"
              color={"goldenrod"}
              variant="h6"
              sx={{ flexGrow: 1 }}
            >
              <StoreIcon />
              My Resturant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}> Home </Link>
                </li>
                <li>
                  <Link to={"/menu"}> Menu </Link>
                </li>
                <li>
                  <Link to={"/contact"}> Contact </Link>
                </li>
                <li>
                  <Link to={"/about"}> About </Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing: 'borderbox', width: "200px"}}}
            
          >
            {drawer}
          </Drawer>
        </Box>
        <Box sx={{p:1}}>
        <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
