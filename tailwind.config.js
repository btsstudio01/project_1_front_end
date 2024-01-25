/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts}"],
  theme: {
    extend: {
      colors: {
        SideBar: "#344054",
      },
      screens: {
        sm: "430px", // Example: Small screens (up to 425px)
        md: "768px", // Example: Medium screens (426px - 768px)
        lg: "1024px", // Example: Large screens (769px - 1024px)
        xl: "1280px", // Example: Extra-large screens (1025px and above)
      },
    },
  },
  plugins: [],
};
