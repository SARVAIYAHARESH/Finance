import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItem,
  Stack,
  Toolbar,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const navbarButton = [
  "Product",
  "Services",
  "Calculator",
  "About us",
  "Contact us",
  "Login",
];

const logoImage = './assets/images/logo.png'
export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar position="static" color="default">
       <Container maxWidth='xl' disableGutters>
        <Toolbar disableGutters={true}>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <img alt="abc" src={logoImage} />
          </Box>

          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Button variant="text" color="primary" className="font-bold">
              Home
            </Button>
            {navbarButton.map((button) => (
              <Button color="inherit" key={button} className="font-bold">
                {button}
              </Button>
            ))}
            <Button
              color="inherit"
              variant="outlined"
              className="font-bold"
            >
              Sign up
            </Button>
          </Stack>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <img alt="abc" src={logoImage} />
          </Box>
          <IconButton
            onClick={toggleDrawer()}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer()}
            PaperProps={{ sx: { width: "200px", alignItems: "center" } }}
          >
            <List>
              <ListItem onClick={toggleDrawer()}>
                <ListItemText primary="Home" />
              </ListItem>
              {navbarButton.map((text, index) => (
                <ListItem key={text} onClick={toggleDrawer()}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              <ListItem onClick={toggleDrawer()}>
                <ListItemText primary="Sign Up" />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
