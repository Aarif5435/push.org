// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        "slide-left": "slide-left 10s linear infinite", // Adjust speed as needed
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
