import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 5173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://127.0.0.1:${port}`);
    const requested = url.pathname === "/" ? "/preview.html" : url.pathname;
    const safePath = normalize(requested)
      .replace(/^[/\\]+/, "")
      .replace(/^(\.\.[/\\])+/, "");
    let filePath = join(root, safePath);
    let data;
    try {
      data = await readFile(filePath);
    } catch {
      filePath = join(root, "public", safePath);
      data = await readFile(filePath);
    }
    response.writeHead(200, { "Content-Type": types[extname(filePath)] || "application/octet-stream" });
    response.end(data);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`BioLine preview running at http://127.0.0.1:${port}`);
});
