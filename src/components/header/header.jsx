import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger, // Removed to avoid module error
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const trigger = useScrollTrigger({ threshold: 100 }); // Removed to avoid module error
  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="fixed"
      elevation={4}
      sx={{
        background: "rgba(234, 30, 99, 1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        color: "black",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 1.5px 4px rgba(0,0,0,0.06)",
      }}>
      <Toolbar className="container mx-auto">
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textShadow: "0.3px 0.3px 30.6px #E91E63" }}>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}>
            {/* Grand Events */}
            <Image
              src="/img/logo.png"
              alt="Logo"
              width={140}
              height={70}
              className="mt-[-5px]"
              sx={{
                border: "1px solid rgba(255, 255, 255,0.05)",
                color: "black",
                boxShadow:
                  "0 4px 20px rgba(0,0,0,0.08), 0 1.5px 4px rgba(0,0,0,0.06)",
              }}
            />
            {/* </Box> */}
          </Link>
        </Typography>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4">
          <Link href="/events" passHref>
            <Button
              color="#E91E63"
              variant="h6"
              sx={{
                flexGrow: 1,
                textShadow: "0.3px 0.3px 30.6px #E91E63",
                color: "#E91E63",
                // border: "0.01px solid #770000",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
              }}>
              Events
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button
              color="#E91E63"
              variant="h6"
              sx={{
                flexGrow: 1,
                textShadow: "0.3px 0.3px 30.6px #E91E63",
                color: "#E91E63",
                // border: "0.01px solid #770000",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
              }}>
              About
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button
              color="inherit"
              variant="h6"
              sx={{
                flexGrow: 1,
                textShadow: "0.3px 0.3px 30.6px #E91E63",
                color: "#E91E63",
                // border: "0.01px solid #770000",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
              }}>
              Contact
            </Button>
          </Link>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <IconButton
            sx={{ color: "white" }}
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
