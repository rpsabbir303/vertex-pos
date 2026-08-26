import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#F15A24",
          hover: "#DC4E1C",
          soft: "#FFF1EB",
          mid: "#FF7A45",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          muted: "#5C5C5C",
          faint: "#8A8A8A",
        },
        fog: "#F5F4F2",
        mist: "#EEF1F4",
        line: "#E6E6E4",
        night: "#111111",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(17,17,17,0.04), 0 10px 28px rgba(17,17,17,0.06)",
        mock: "0 12px 40px rgba(17,17,17,0.12), 0 2px 8px rgba(17,17,17,0.06)",
      },
      maxWidth: {
        site: "1180px",
        feature: "1620px",
      },
      borderRadius: {
        card: "16px",
        panel: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
