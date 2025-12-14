import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: true, // یعنی 0.0.0.0 — اجازه دسترسی از شبکه
    port: 5173
  },
});
