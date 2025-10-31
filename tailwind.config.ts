import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: ["./src/index.html", "./src/**/*.{ts,tsx,css}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config

