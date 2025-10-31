import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";
import type { BunPlugin } from "bun";

export const tailwindPlugin: BunPlugin = {
  name: "tailwind-postcss",
  setup(builder) {
    builder.onLoad({ filter: /\.css$/ }, async (args) => {
      const source = await Bun.file(args.path).text();
      const result = await postcss([tailwindcss]).process(source, {
        from: args.path,
      });

      const watchFiles: string[] = [];

      for (const message of result.messages) {
        if (message.type === "dependency" && "file" in message && message.file) {
          watchFiles.push(message.file as string);
        }
      }

      return {
        contents: result.css,
        loader: "css",
        watchFiles,
      };
    });
  },
};

