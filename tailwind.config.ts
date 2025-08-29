import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      'xs': ['clamp(0.75rem, 2vw, 0.875rem)', { lineHeight: '1.2' }],
      'sm': ['clamp(0.875rem, 2.5vw, 1rem)', { lineHeight: '1.3' }], 
      'base': ['clamp(0.875rem, 2.5vw, 1rem)', { lineHeight: '1.4' }],
      'lg': ['clamp(1rem, 3vw, 1.125rem)', { lineHeight: '1.4' }],
      'xl': ['clamp(1.125rem, 3.5vw, 1.25rem)', { lineHeight: '1.4' }],
      '2xl': ['clamp(1.25rem, 4vw, 1.5rem)', { lineHeight: '1.3' }],
      '3xl': ['clamp(1.5rem, 4.5vw, 1.875rem)', { lineHeight: '1.2' }],
      '4xl': ['clamp(1.875rem, 5.5vw, 2.25rem)', { lineHeight: '1.1' }],
      '5xl': ['clamp(2.25rem, 6.5vw, 3rem)', { lineHeight: '1.1' }],
      '6xl': ['clamp(2.5rem, 7.5vw, 3.75rem)', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        teal: {
          DEFAULT: "#008080",
          light: "#99CCCC",
        },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
