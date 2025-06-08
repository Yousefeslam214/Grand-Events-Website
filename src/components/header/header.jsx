// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Menu,
//   MenuItem,
//   useScrollTrigger,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import Link from "next/link";
// import { useState } from "react";

// export default function Header() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const trigger = useScrollTrigger({ threshold: 100 });

//   const handleMenu = (event) => setAnchorEl(event.currentTarget);
//   const handleClose = () => setAnchorEl(null);

//   return (
//     // <AppBar
//     //   position="fixed"
//     //   elevation={trigger ? 4 : 0}
//     //   sx={{
//     //     background: trigger ? "white" : "transparent",
//     //     transition: "all 0.3s ease",
//     //     color: trigger ? "black" : "white",
//     //   }}
//     //   // className="container mx-auto self-center"
//     // >
//     <AppBar
//       position="fixed"
//       elevation={trigger ? 4 : 0}
//       sx={{
//         background: trigger ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0)",
//         backdropFilter: "blur(10px)",
//         WebkitBackdropFilter: "blur(10px)", // for Safari
//         transition: "all 0.3s ease",
//         color: trigger ? "black" : "black",
//         boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 1.5px 4px rgba(0,0,0,0.06)",
//       }}>
//       <Toolbar
//         className="container mx-auto "
//         sx={
//           {
//             // display: "flex",
//             // justifyContent: "space-between",
//             // px: 0, // Remove default padding
//           }
//         }>
//         {/* Logo */}
//         <Typography
//           variant="h6"
//           sx={{ flexGrow: 1, textShadow: "0.3px 0.3px 30.6px #E91E63" }}>
//           <Link
//             href="/"
//             style={{
//               //  color: "white",
//               textDecoration: "none",
//             }}>
//             Grand Events
//           </Link>
//         </Typography>

//         {/* Desktop Nav */}
//         <div
//           className="hidden md:flex gap-4"
//           sx={{ flexGrow: 1, textShadow: "0.3px 0.3px 30px #E91E63" }}>
//           <Link href="/events" passHref>
//             <Button
//               color="inherit"
//               sx={{ textShadow: "0.3px 0.3px 30px #E91E63" }}>
//               Events
//             </Button>
//           </Link>
//           <Link href="/about" passHref>
//             <Button
//               color="inherit"
//               sx={{ textShadow: "0.3px 0.3px 30px #E91E63" }}>
//               About
//             </Button>
//           </Link>
//           <Link href="/contact" passHref>
//             <Button
//               color="inherit"
//               sx={{ textShadow: "0.3px 0.3px 30px #E91E63" }}>
//               Contact
//             </Button>
//           </Link>
//         </div>

//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={handleMenu}>
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}>
//             <MenuItem onClick={handleClose}>
//               <Link href="/events">Events</Link>
//             </MenuItem>
//             <MenuItem onClick={handleClose}>
//               <Link href="/about">About</Link>
//             </MenuItem>
//             <MenuItem onClick={handleClose}>
//               <Link href="/contact">Contact</Link>
//             </MenuItem>
//           </Menu>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// }
"use client";
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
import { useState, useEffect } from "react";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const trigger = useScrollTrigger({ threshold: 100 });
  const [isDarkBg, setIsDarkBg] = useState(false);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  // Function to detect brightness of background image
  useEffect(() => {
    const checkBackgroundBrightness = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext("2d");

      const bodyStyles = window.getComputedStyle(document.body);
      const bgImage = bodyStyles.backgroundImage;

      if (!bgImage || bgImage === "none") return;

      const url = bgImage.match(/url\(["']?([^"')]+)["']?\)/)?.[1];

      if (!url) return;

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = url;

      img.onload = () => {
        ctx.drawImage(img, 0, 0, 1, 1);
        const pixel = ctx.getImageData(0, 0, 1, 1).data;
        const brightness =
          (pixel[0] * 299 + pixel[1] * 587 + pixel[2] * 114) / 1000;
        setIsDarkBg(brightness < 128);
      };
    };

    checkBackgroundBrightness();
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 4 : 0}
      sx={{
        background: trigger
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255,0.35)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        // color: isDarkBg || trigger ? "white" : "black",
        color: "black",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 1.5px 4px rgba(0,0,0,0.06)",
      }}>
      <Toolbar className="container mx-auto">
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textShadow: "0.3px 0.3px 30.6px #E91E63" }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Grand Events
          </Link>
        </Typography>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4">
          <Link href="/events" passHref>
            <Button
              color="inherit"
              variant="h6"
              sx={{ flexGrow: 1, textShadow: "0.3px 0.3px 30.6px #E91E63" }}>
              Events
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button
              color="inherit"
              variant="h6"
              sx={{ flexGrow: 1, textShadow: "0.3px 0.3px 30.6px #E91E63" }}>
              About
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button
              color="inherit"
              variant="h6"
              sx={{ flexGrow: 1, textShadow: "0.3px 0.3px 30.6px #E91E63" }}>
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
