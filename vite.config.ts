
// vite.config.ts
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import path from "path"

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact(),
    // ...,
  ],

  server:{proxy:{
    "/api":{
      target: 'http://localhost',

    }
  }},
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
