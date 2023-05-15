/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        400: "#8380b6",
      },
      secondary: {
        400: "#45f0df",
      },
      tertiary: {
        700: "#393D3F",
        800: "#27292B",
        900: "#1D1F20",
      },
    },
    extend: {
      backgroundImage: {
        header:
          "url('https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        appearFromRight: "appearFromRight 3s",
        appearFromLeft: "appearFromLeft 3s",
        appearFromTop: "appearFromTop 3s",
        appearFromBottom: "appearFromBottom 3s",
        appearFromNothing: "appearFromNothing 3s",
      },
      keyframes: {
        appearFromRight: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        appearFromLeft: {
          "0%": { opacity: 0, transform: "translateX(+50px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        appearFromTop: {
          "0%": { opacity: 0, transform: "translateY(-50px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        appearFromBottom: {
          "0%": { opacity: 0, transform: "translateY(+50px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        appearFromNothing: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
