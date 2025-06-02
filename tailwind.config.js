module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"], // Override default sans
        josefin: ["Josefin Sans", "sans-serif"], // Add custom font
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      xs: "480px", // Extra small devices (phones, < 640px)
      sm: "640px", // Small devices (tablets)
      md: "768px", // Medium devices (laptops)
      lg: "1024px", // Large devices (desktops)
      xl: "1280px", // Extra large devices
    },
  },
  plugins: [],
};
