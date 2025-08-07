import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Standard localhost binding
    port: 3000, // Default Vite port
    strictPort: true, // Exit if port is in use
    open: true, // Open browser on server start
  },
  plugins: [
    react(), // SWC for faster React compilation
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"], // Default extensions
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@tanstack/react-query", // If using React Query
    ],
    exclude: [], // Add any problematic packages here
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
    sourcemap: process.env.NODE_ENV !== "production", // Sourcemaps in dev only
    minify: "terser", // Production minification
  },
  css: {
    devSourcemap: true, // CSS sourcemaps in development
    modules: {
      localsConvention: "camelCase", // CSS module naming convention
    },
  },
});