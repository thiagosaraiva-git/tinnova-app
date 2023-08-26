"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.scss";

import Link from "next/link";

import React, { useState } from "react";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="navbarContainer">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="a">
            Tinnova App
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link href={"/"} passHref>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Início</Typography>
                </MenuItem>
              </Link>
              <Link href={"/cadastro"} passHref>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Cadastrar</Typography>
                </MenuItem>
              </Link>
              <Link href={"/usuarios"} passHref>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Usuários</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} className='navbarMenu'>
            <Link href={"/"} passHref>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Início</Typography>
              </MenuItem>
            </Link>
            <Link href={"/cadastro"} passHref>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Cadastrar</Typography>
              </MenuItem>
            </Link>
            <Link href={"/usuarios"} passHref>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Usuários</Typography>
              </MenuItem>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
