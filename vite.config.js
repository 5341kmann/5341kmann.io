import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";

export default defineConfig({
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
