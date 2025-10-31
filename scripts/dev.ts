import { join } from "node:path";

import { tailwindPlugin } from "./tailwind-plugin";

const port = Number(process.env.PORT ?? 3000);
const outdir = join(process.cwd(), "build");

function normalizePath(pathname: string) {
  if (pathname === "/" || pathname === "") {
    return "index.html";
  }
  return pathname.replace(/^\//, "");
}

async function serveFile(pathname: string) {
  const file = Bun.file(join(outdir, pathname));
  if (await file.exists()) {
    return new Response(file);
  }

  if (!pathname.endsWith(".html")) {
    const fallback = Bun.file(join(outdir, "index.html"));
    if (await fallback.exists()) {
      return new Response(fallback, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }
  }

  return new Response("Not found", { status: 404 });
}

async function start() {
  const build = await Bun.build({
    entrypoints: ["src/index.html"],
    outdir,
    target: "browser",
    sourcemap: "inline",
    plugins: [tailwindPlugin],
  } as any);

  if (!build.success) {
    for (const log of build.logs) {
      console.error(log.message);
    }
    throw new Error("Initial build failed");
  }

  (build as any).watch?.({
    onRebuild(error: unknown) {
      if (error) {
        console.error("⛔️ Rebuild failed", error);
      } else {
        console.log("♻️  Rebuilt");
      }
    },
  });

  const server = Bun.serve({
    port,
    async fetch(request) {
      const url = new URL(request.url);
      const pathname = normalizePath(url.pathname);
      return serveFile(pathname);
    },
  });

  console.log(`🚀 Dev server ready at http://localhost:${server.port}`);
  console.log("Press Ctrl+C to stop");

  await new Promise(() => {});
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});

