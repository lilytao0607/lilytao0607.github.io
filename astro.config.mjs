// @ts-check
import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],

  // 使用 base 配置支持部署到任意子目录
  // 部署到根目录: base: '/'
  // 部署到子目录: base: '/your-subdirectory/'
  // 可以通过环境变量 ASTRO_BASE 动态配置
  base: import.meta.env.ASTRO_BASE || "/",

  // 如果需要生成 sitemap 或 RSS，取消注释并设置正确的 site
  // site: 'https://your-domain.com',

  outDir: "./dist",

  server: {
    host: "0.0.0.0",
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
});
