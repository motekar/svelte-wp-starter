import { resolve } from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
  },
  plugins: [svelte()],
  build: {
    outDir: "assets/build",
    manifest: true,
    rollupOptions: {
      input: {
        frontend: resolve(__dirname, "src/frontend.js"),
        admin: resolve(__dirname, "src/admin.js"),
      },
      output: {
        entryFileNames: `[name].[hash].js`,
        chunkFileNames: `[name].[hash].js`,
        assetFileNames: `[name].[hash].[ext]`,
      },
    },
  },
});
