import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import prismjs from "vite-plugin-prismjs"

export default defineConfig({
  plugins:[
    prismjs({
      languages: ["python"],
      plugins: ['line-numbers', 'show-language'],
      css: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        pages: resolve(
          import.meta.dirname,
          "pages/CSC-324/competencies.html",
        ),
      },
    },
  },
});
