import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import styled from "styled-components";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@emotion/styled"],
  },
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "./src"),
    },
  },
});
