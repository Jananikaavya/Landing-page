import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure the base is set to root
  build: {
    outDir: 'dist', // Default output directory
  },
});