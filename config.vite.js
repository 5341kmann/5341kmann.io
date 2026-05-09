import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        competencies: resolve(__dirname, "/pages/CSC-324/competencies.html"),
      },
    },
  },
});
