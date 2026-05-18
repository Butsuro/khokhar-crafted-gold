import { writeFileSync } from "fs";

// Prerender the homepage to static HTML for static hosting
const serverModule = await import("./dist/server/server.js");
const server = serverModule.default;

const request = new Request("http://localhost/");
const response = await server.fetch(request);
const html = await response.text();

writeFileSync("./dist/client/index.html", html);
console.log("Prerendered to dist/client/index.html");
