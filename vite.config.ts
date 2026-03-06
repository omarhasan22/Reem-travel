import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Get base path from environment variable for GitHub Pages
// If GITHUB_REPOSITORY is set, use the repo name as base path
// Otherwise, use empty string for local development
const getBasePath = () => {
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
    return `/${repoName}/`;
  }
  // For GitHub Pages, you can also set this manually via VITE_BASE_PATH
  return process.env.VITE_BASE_PATH || '/';
};

export default defineConfig({
  base: getBasePath(),
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
