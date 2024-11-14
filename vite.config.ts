import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import checker from "vite-plugin-checker";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), checker({ typescript: true })],
  resolve: {
    alias: {
      "tailwind-config": path.resolve(__dirname, "./tailwind.config.js"),
    },
  },
  server: {
    port: 5555,
    open: true,
  },
});