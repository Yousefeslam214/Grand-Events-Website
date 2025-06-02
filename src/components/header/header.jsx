import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const trigger = useScrollTrigger({ threshold: 100 });

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    // <AppBar
    //   position="fixed"
    //   elevation={trigger ? 4 : 0}
    //   sx={{
    //     background: trigger ? "white" : "transparent",
    //     transition: "all 0.3s ease",
    //     color: trigger ? "black" : "white",
    //   }}
    //   // className="container mx-auto self-center"
    // >
    <AppBar
      position="fixed"
      elevation={trigger ? 4 : 0}
      sx={{
        background: trigger ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)", // for Safari
        transition: "all 0.3s ease",
        color: trigger ? "black" : "black",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 1.5px 4px rgba(0,0,0,0.06)",
      }}>
      <Toolbar
        className="container mx-auto "
        sx={
          {
            // display: "flex",
            // justifyContent: "space-between",
            // px: 0, // Remove default padding
          }
        }>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textShadow: "0.3px 0.3px 30.6px #E91E63" }}>
          <Link
            href="/"
            style={{
              //  color: "white",
              textDecoration: "none",
            }}>
            Grand Events
          </Link>
        </Typography>

        {/* Desktop Nav */}
        <div
          className="hidden md:flex gap-4"
          sx={{ flexGrow: 1, textShadow: "0.3px 0.3px 30px #E91E63" }}>
          <Link href="/events" passHref>
            <Button
              color="inherit"
              sx={{ textShadow: "0.3px 0.3px 30px #E91E63" }}>
              Events
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button
              color="inherit"
              sx={{ textShadow: "0.3px 0.3px 30px #E91E63" }}>
              About
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button
              color="inherit"
              sx={{ textShadow: "0.3px 0.3px 30px #E91E63" }}>
              Contact
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={handleClose}>
              <Link href="/events">Events</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/about">About</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/contact">Contact</Link>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
