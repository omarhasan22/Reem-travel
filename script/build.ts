import { build as viteBuild } from "vite";
import { rm, copyFile } from "fs/promises";
import { join } from "path";

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  // Create 404.html for GitHub Pages client-side routing
  // This redirects to index.html with the correct base path
  const projectRoot = join(import.meta.dirname, "..");
  const distPublic = join(projectRoot, "dist", "public");
  const indexPath = join(distPublic, "index.html");
  const notFoundPath = join(distPublic, "404.html");

  try {
    // Read the index.html to get the base path
    const { readFile, writeFile } = await import("fs/promises");
    const indexContent = await readFile(indexPath, "utf-8");

    // Extract base path from the script/src or link/href in index.html
    // Default to /Reem-travel/ if not found
    const basePathMatch = indexContent.match(/href="(\/[^"]+)\/favicon\.png"/) ||
      indexContent.match(/src="(\/[^"]+)\/assets\//);
    const basePath = basePathMatch ? basePathMatch[1] : "/Reem-travel";

    // Create 404.html with redirect script
    const redirect404 = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    // Single Page Apps for GitHub Pages
    // https://github.com/rafgraph/spa-github-pages
    var pathSegmentsToKeep = 1;
    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      '${basePath}/' +
      l.pathname.split('/').slice(pathSegmentsToKeep).join('/').replace(/^\\//, '') +
      (l.search ? '?' + l.search.substring(1) : '') +
      l.hash
    );
  </script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>`;

    await writeFile(notFoundPath, redirect404);
    console.log("Created 404.html for GitHub Pages routing");
  } catch (err) {
    console.warn("Could not create 404.html:", err);
    // Fallback: just copy index.html
    try {
      const { copyFile } = await import("fs/promises");
      await copyFile(indexPath, notFoundPath);
      console.log("Created 404.html (fallback: copied index.html)");
    } catch (copyErr) {
      console.error("Failed to create 404.html:", copyErr);
    }
  }
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
