import { rm } from "node:fs/promises";

import { tailwindPlugin } from "./tailwind-plugin";

async function build() {
  await rm("build", { recursive: true, force: true });

  const result = await Bun.build({
    entrypoints: ["src/index.html"],
    outdir: "build",
    target: "browser",
    minify: true,
    plugins: [tailwindPlugin],
  });

  if (!result.success) {
    for (const log of result.logs) {
      console.error(log.message);
    }
    throw new Error("Build failed");
  }

  console.log("✅ Build complete: build/");
}

build().catch((error) => {
  console.error(error);
  process.exit(1);
});

