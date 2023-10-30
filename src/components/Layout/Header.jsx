import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg";
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
        sx={{ flexGrow: 1, my: "2px" }}
      >
        <img src={Logo} alt="logo" height={"70px"} width={"200px"} />
      </Typography>
      <Divider />
      <Box>
      <ul className="mobile-navigation">
        <li>
          <NavLink to={"/"}> Home </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}> Menu </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}> Contact </NavLink>
        </li>
        <li>
          <NavLink to={"/about"}> About </NavLink>
        </li>
      </ul>
      </Box>

      
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
              <img src={Logo} alt="logo" height={"70px"} width={"250px"} />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink to={"/"}> Home </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}> Menu </NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}> Contact </NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}> About </NavLink>
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
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "borderbox", width: "200px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
