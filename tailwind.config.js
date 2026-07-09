/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#F5F3FF",
          muted: "#9A96B0",
          dim: "#6E6A85",
        },
        base: {
          DEFAULT: "#08080D",
          elevated: "#101018",
          line: "#1E1E2A",
        },
        remix: {
          from: "#B026FF",
          to: "#FF2E92",
        },
        creator: {
          from: "#00E5FF",
          to: "#3D5AFE",
        },
        leadis: {
          from: "#FFD166",
          to: "#FF6FB5",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "aurora-drift": {
          "0%, 100%": { transform: "translate(0%, 0%) rotate(0deg) scale(1)" },
          "33%": { transform: "translate(6%, -4%) rotate(4deg) scale(1.08)" },
          "66%": { transform: "translate(-4%, 5%) rotate(-3deg) scale(0.96)" },
        },
        "eq-bar": {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
        "scanline": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "aurora-drift": "aurora-drift 18s ease-in-out infinite",
        "eq-bar": "eq-bar 1.1s ease-in-out infinite",
        "scanline": "scanline 2.4s linear infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
