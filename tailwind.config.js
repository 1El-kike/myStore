/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "mi-image": "url('')",
      },
      boxShadow: {
        custom:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        opacity: {
          "0%": { transform: "scale(1) translateY(0)", opacity: 1 },
          "50%": { transform: "scale(1.2) translateY(-10px)", opacity: 0.5 },
          "100%": { transform: "scale(1) translateY(0)", opacity: 1 },
        },
        opacityonly: {
          "0%": { transform: " translateX(100px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        transition: {
          "0%": { transform: "scale(1) translateX(400px)", opacity: 1 },
          "50%": { transform: "scale(1.2) ", opacity: 0.5 },
          "100%": { transform: "scale(1) translateX(0)", opacity: 1 },
        },
        sparkle: {
          "0%": { scale: 0.2 },
          "100%": { scale: 1 },
        },
      },
      animation: {
        opacity: "opacity 1s ease ",
        opacityonly: "opacityonly 200ms ease-out ",
        sparkle: "sparkle 1s ease ",
        transition: "transition 1s ease ",
      },
    },
  },
  plugins: [],
};
