import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Definición de __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  { loc: "https://renace-ecommerce.vercel.app/", priority: 1.0 },
  { loc: "https://renace-ecommerce.vercel.app/productos", priority: 0.9 },
  { loc: "https://renace-ecommerce.vercel.app/nosotros", priority: 0.7 },
  { loc: "https://renace-ecommerce.vercel.app/contacto", priority: 0.7 },
];

const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const outputPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outputPath, sitemap.trim());
