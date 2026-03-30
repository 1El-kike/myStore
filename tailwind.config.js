const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        accent: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      lineHeight: {
        custom: "0.22",
      },
      backgroundImage: {
        "mi-image": "url('')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionDuration: {
        time: "2s",
      },
      boxShadow: {
        custom:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        medium:
          "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        large:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      keyframes: {
        customScroll: {
          "0%": { transform: "translateX(-160px)" },
          "100%": { transform: "translateX(0px)" },
        },
        rotatecircle: {
          "0%": {
            transform: "translateY(-460px) translateX(-1600px) rotate(360deg)",
            rotate: "360deg",
          },
          "80%": { opacity: 0 },
          "100%": {
            transform: "translateY(0px) translateX(0px) rotate(-45deg)",
            rotate: "0",
            opacity: 1,
          },
        },
        opacity: {
          "0%": { transform: "scale(1) translateY(0)", opacity: 1 },
          "50%": { transform: "scale(1.2) translateY(-10px)", opacity: 0.5 },
          "100%": { transform: "scale(1) translateY(0)", opacity: 1 },
        },
        opacityonly: {
          "0%": { transform: "translateX(100px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        transition: {
          "0%": { transform: "scale(1) translateX(400px)", opacity: 1 },
          "50%": { transform: "scale(1.2)", opacity: 0.5 },
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
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        slideInBottom: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        opacity: "opacity 500ms ease",
        delay1: "bounce 1s 100ms infinite",
        delay2: "bounce 1s 200ms infinite",
        delay3: "bounce 1s 300ms infinite",
        delay4: "bounce 1s 400ms infinite",
        delay5: "bounce 1s 500ms infinite",
        opacityonly: "opacityonly 200ms ease-out",
        sparkle: "sparkle 500ms ease",
        transition: "transition 1s ease",
        rotatecircle: "rotatecircle 800ms ease-in-out",
        customScroll: "customScroll 0.5s ease-in-out infinite alternate",
        fadeInUp: "fadeInUp 0.6s ease-out",
        fadeInLeft: "fadeInLeft 0.6s ease-out",
        fadeInRight: "fadeInRight 0.6s ease-out",
        scaleIn: "scaleIn 0.4s ease-out",
        slideInBottom: "slideInBottom 0.5s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
      },
      screens: {
        xs: "475px",
        "3xl": "1600px",
      },
    },
  },
  variants: {
    extend: {
      lineHeight: ["responsive"],
      animation: ["hover", "focus", "group-hover"],
      transform: ["hover", "focus", "group-hover"],
      scale: ["hover", "focus", "group-hover"],
      rotate: ["hover", "focus", "group-hover"],
      translate: ["hover", "focus", "group-hover"],
      skew: ["hover", "focus", "group-hover"],
      transitionProperty: ["hover", "focus", "group-hover"],
      transitionDuration: ["hover", "focus", "group-hover"],
      transitionTimingFunction: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".scroll-smooth": {
          "scroll-behavior": "smooth",
        },
        ".scroll-auto": {
          "scroll-behavior": "auto",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
