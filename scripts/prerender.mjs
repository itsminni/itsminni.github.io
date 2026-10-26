import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { text } from "node:stream/consumers";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "dist");
const template = await readFile(join(output, "index.html"), "utf8");
const placeholder = '<div id="root"><!--app-html--></div>';
if (!template.includes(placeholder)) {
  throw new Error("The built HTML is missing its prerender placeholder.");
}

const temporaryRoot = join(root, "node_modules", ".tmp");
await mkdir(temporaryRoot, { recursive: true });
const temporaryBuild = await mkdtemp(join(temporaryRoot, "portfolio-prerender-"));

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

try {
  // The server bundle is only used at build time.
  await build({
    root,
    logLevel: "warn",
    build: {
      ssr: "src/entry-server.ts",
      outDir: temporaryBuild,
      emptyOutDir: true,
      copyPublicDir: false,
      rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
    },
  });
  const [{ App, content }, { createElement, StrictMode }, { prerenderToNodeStream }] =
    await Promise.all([
      import(pathToFileURL(join(temporaryBuild, "entry-server.mjs")).href),
      import("react"),
      import("react-dom/static"),
    ]);

  for (const language of ["it", "en"]) {
    const { prelude } = await prerenderToNodeStream(
      createElement(StrictMode, null, createElement(App, { initialLanguage: language })),
    );
    const markup = await text(prelude);
    const description = escapeAttribute(content[language].bio);
    const html = template
      .replace(placeholder, () => `<div id="root" data-prerendered="true">${markup}</div>`)
      .replace('<html lang="it">', `<html lang="${language}">`)
      .replace(
        /(<meta\s+(?:name="description"|property="og:description")\s+content=")[^"]*(")/g,
        (_match, start, end) => `${start}${description}${end}`,
      );
    const directory = language === "it" ? output : join(output, "en");
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, "index.html"), html);
    console.log(`Prerendered ${language === "it" ? "/" : "/en/"}: ${markup.length} characters of HTML`);
  }
} finally {
  await rm(temporaryBuild, { recursive: true, force: true });
}
