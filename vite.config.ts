import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Base path for GitHub Pages
// Set this to your repository name (e.g., '/Reem-Travel/')
// Leave as '/' if deploying to username.github.io (user/organization page)
// Or set via environment variable: VITE_BASE_PATH
const basePath = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "client", "src", "assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
