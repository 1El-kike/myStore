const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      lineHeight: {
        custom: "0.22", // Reducirá el espacio entre las letras class = leading-custom
      },
      backgroundImage: {
        "mi-image": "url('')",
      },
      transitionDuration: {
        time: "2s",
      },
      boxShadow: {
        custom:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        customScroll:{
          "0%":{transform:"translateX(-160px)" },
          "100%":{transform:"translateX(0px)" }
        },
        rotatecircle:{
          "0%":{transform:"translateY(-460px) translateX(-1600px) rotate(360deg)", rotate:"360deg" },
          "80%":{opacity: 0},
          "100%":{transform:"translateY(0px) translateX(0px) rotate(-45deg) ", rotate:'0',opacity: 1 }
        },
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
          "0%": {
            rotate: "10deg",
            transform: "translateY(100px)",
            background: "red",
          },
          "50%": { background: "yellow" },
          "100%": {
            rotate: "-45deg",
            transform: "scale(1) translateX(0)",
            background: "linear-gradient(to left #CFD8E3, #E9EEF4)",
          },
        },
      },
      animation: {
        opacity: "opacity 500ms ease ",
        delay1: "bounce 1s 100ms infinite ",
        delay2: "bounce 1s 200ms infinite ",
        delay3: "bounce 1s 300ms infinite ",
        delay4: "bounce 1s 400ms infinite ",
        delay5: "bounce 1s 500ms infinite ",
        opacityonly: "opacityonly 200ms ease-out ",
        sparkle: "sparkle 500ms ease ",
        transition: "transition 1s ease ",
        rotatecircle:"rotatecircle 800ms ease-in-out",
        customScroll:"customScroll 0.5s ease-in-out infinite alternate"
      },
    },
  },
  variants: {
    extend: {
      lineHeight: ["responsive"],
    },
  },
  plugins: [],
};
