import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
// import { reactScopedCssPlugin } from "rollup-plugin-react-scoped-css"
// import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    base: "/",
 build: {
    outDir: 'dist', // Change 'dist' to 'build'
  },
    resolve: {
      alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
    css: {
      preprocessorOptions: {
        // scss: {
        //   additionalData: `@import "./src/styles/index.scss";`,
        // },
      },
    },
})
