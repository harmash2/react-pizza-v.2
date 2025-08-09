import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      cache: false, // avoids weird caching issues
      failOnError: false, // don't break the build
      failOnWarning: false, // don't break on warnings
      include: ["src/**/*.js", "src/**/*.jsx"],
      exclude: ["node_modules", "dist"],
    }),
  ],
});
