# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Astro 5 + Vue 3 的太极主题网站项目，用于展示太极文化、武术和健康养生相关内容。

## 开发命令

```bash
# 启动开发服务器（监听所有网络接口 0.0.0.0:4321）
npm run dev

# 构建生产版本到 ./dist/ 目录
npm run build

# 预览生产构建
npm run preview

# 安装依赖（使用 pnpm）
pnpm install
```

## 技术栈

- **Astro 5**: 现代化的静态网站生成器，采用岛屿架构（Islands Architecture）
- **Vue 3**: 用于交互式组件（通过 @astrojs/vue 集成）
- **TypeScript**: 配置了类型检查（tsconfig.json）

## 项目结构

```
src/
├── assets/         # 静态资源
│   └── image/     # 太极相关图片（tai-chi-*.jpg/png）
├── components/    # Astro/Vue 组件
├── layouts/       # 页面布局模板
└── pages/         # 路由页面（基于文件系统的路由）
```

**Astro 特性：**
- 页面路由：`src/pages/` 中的 `.astro` 文件自动生成对应路由
- 组件：`.astro` 文件是 Astro 的原生组件格式
- 布局：`Layout.astro` 提供通用的 HTML 结构
- 资源处理：支持在 `.astro` 组件中直接导入图片并获得优化的输出路径

## 配置说明

- `astro.config.mjs`:
  - 集成了 Vue 3 框架
  - 服务器配置为监听所有网络接口 (`host: '0.0.0.0'`)
- 开发服务器默认运行在 `localhost:4321`

## 开发注意事项

1. **Astro 组件语法**：`.astro` 文件包含代码围栏（`---`）和模板，代码围栏中的代码在构建时执行
2. **客户端交互**：需要客户端交互的组件应使用 Vue 组件（`.vue` 文件）或添加 `client:*` 指令
3. **静态资源**：`public/` 目录中的文件会直接复制到构建输出，`src/assets/` 中的资源会被 Astro 优化处理
4. **路由**：基于文件系统，`src/pages/index.astro` 对应网站根路径
