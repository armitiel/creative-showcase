import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        vision: {
          blue: "hsl(var(--vision-blue))",
        },
        "image-card": "hsl(var(--image-card))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-opacity": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
        },
        "drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1.2)" },
          "25%": { transform: "translate(-1%, 1%) scale(1.22)" },
          "50%": { transform: "translate(1%, -0.5%) scale(1.18)" },
          "75%": { transform: "translate(-0.5%, -1%) scale(1.21)" },
        },
        "drift-reverse": {
          "0%, 100%": { transform: "translate(0, 0) scale(1.3) rotate(180deg)" },
          "33%": { transform: "translate(1.5%, 1%) scale(1.28) rotate(180deg)" },
          "66%": { transform: "translate(-1%, -1.5%) scale(1.32) rotate(180deg)" },
        },
        "shimmer": {
          "0%, 100%": { opacity: "0", transform: "translateX(-100%) rotate(-15deg)" },
          "50%": { opacity: "0.1", transform: "translateX(100%) rotate(-15deg)" },
        },
        "fall-in": {
          "0%": { opacity: "0", transform: "translateY(-60px)" },
          "60%": { opacity: "1", transform: "translateY(8px)" },
          "80%": { transform: "translateY(-4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "hero-reveal": {
          "0%": { opacity: "0", transform: "scale(1.1)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "levitate": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "aurora-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "aurora-shift": {
          "0%, 100%": { transform: "translateX(0)", opacity: "0.3" },
          "50%": { transform: "translateX(20px)", opacity: "0.6" },
        },
        "dot-fill": {
          "0%": { opacity: "0", transform: "scale(0)" },
          "60%": { opacity: "1", transform: "scale(1.4)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "aurora-base": {
          "0%, 100%": { transform: "scale(1)", filter: "brightness(1) hue-rotate(0deg)" },
          "50%": { transform: "scale(1.08)", filter: "brightness(1.15) hue-rotate(12deg)" },
        },
        "aurora-blob-1": {
          "0%, 100%": { transform: "translate(-15%, -10%) scale(1.1)" },
          "33%": { transform: "translate(22%, 14%) scale(1.4)" },
          "66%": { transform: "translate(8%, 28%) scale(1.15)" },
        },
        "aurora-blob-2": {
          "0%, 100%": { transform: "translate(20%, 10%) scale(1.25)" },
          "33%": { transform: "translate(-22%, -14%) scale(1.45)" },
          "66%": { transform: "translate(-10%, 20%) scale(1.1)" },
        },
        "aurora-blob-3": {
          "0%, 100%": { transform: "translate(2%, 22%) scale(1.2)" },
          "33%": { transform: "translate(18%, -18%) scale(1.1)" },
          "66%": { transform: "translate(-18%, 4%) scale(1.4)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-opacity": "fade-in-opacity 0.6s ease-out forwards",
        "fade-in-left": "fade-in-left 0.6s ease-out forwards",
        "fade-in-right": "fade-in-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "bounce": "bounce 1s infinite",
        "dot-fill": "dot-fill 0.6s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
