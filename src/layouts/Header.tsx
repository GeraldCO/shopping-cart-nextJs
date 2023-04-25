import { Header } from "@/types/header";
import { ThemeProvider, Box, Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import customTheme from "@/components/themes/customTheme";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";

import {Drawer, IconButton, Toolbar, Typography, Button} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {ShoppingCart, Menu} from '@mui/icons-material';

import { useCartContext } from "@/components/Cart/useCartContext";


interface LinkTabProps {
  label?: string;
  path?: string;
}

const drawerWidth = 240;
const navItems = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Products" },
  { path: "/contact", label: "Contact Us" },
];

const Header = (props: Header) => {
  const { items, addItem, removeItem, status, showCart } = useCartContext();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={customTheme}>
      <header>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar component="nav">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                MUI
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Link href={item.path} passHref>
                    <Button key={item.label} sx={{ color: "#fff" }}>
                      {item.label}
                    </Button>
                  </Link>
                ))}
                <ShoppingCart 
                  onClick={() => showCart(!status)}
                />
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            ></Drawer>
          </Box>
          
        </Box>

       <br/>
      </header>
    </ThemeProvider>
  );
};

export default Header;
