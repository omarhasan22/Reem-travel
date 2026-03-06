import { build as viteBuild } from "vite";
import { rm, copyFile } from "fs/promises";
import { join } from "path";

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  // Copy index.html to 404.html for GitHub Pages client-side routing
  // Go up one level from script/ to project root
  const projectRoot = join(import.meta.dirname, "..");
  const distPublic = join(projectRoot, "dist", "public");
  const indexPath = join(distPublic, "index.html");
  const notFoundPath = join(distPublic, "404.html");
  
  try {
    await copyFile(indexPath, notFoundPath);
    console.log("Created 404.html for GitHub Pages routing");
  } catch (err) {
    console.warn("Could not create 404.html:", err);
  }
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
