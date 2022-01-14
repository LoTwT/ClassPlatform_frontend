import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig((config) => {
  const { mode } = config

  // .env
  const root = process.cwd()
  const { VITE_SERVER_PORT } = loadEnv(mode, root) as unknown as ImportMetaEnv

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: VITE_SERVER_PORT || 3000,
    },
  }
})

// 环境变量
// https://cn.vitejs.dev/guide/env-and-mode.html#intellisense
interface ImportMetaEnv {
  readonly VITE_SERVER_PORT: number
}
