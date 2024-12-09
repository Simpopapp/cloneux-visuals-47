import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0F1117",
        foreground: "#ffffff",
        gold: {
          DEFAULT: "#FFA500",
          light: "#FFB732",
          dark: "#E69500"
        },
        card: {
          DEFAULT: "rgba(16, 18, 27, 0.8)",
          hover: "rgba(16, 18, 27, 0.95)"
        },
        muted: {
          DEFAULT: "#374151",
          foreground: "#9CA3AF"
        }
      },
      backgroundImage: {
        'hero': "linear-gradient(rgba(15, 17, 23, 0.7), rgba(15, 17, 23, 0.8)), url('/lovable-uploads/54640f51-cf29-4750-9008-f481803b60ed.png')"
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;