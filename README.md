# 漫画展示项目

一个基于React的响应式漫画展示应用，支持PC端和移动端自适应。

## 功能特性

- 📱 **响应式设计**：完美适配PC端、平板端和移动端
- 🖼️ **图片展示**：居中展示漫画图片，支持悬停缩放效果
- 📝 **旁白区域**：固定高度的文字区域，支持滚动查看
- 🔄 **切换功能**：上一页/下一页按钮，支持循环浏览
- 🎨 **现代UI**：渐变背景、圆角设计、阴影效果
- 📊 **页面指示器**：显示当前页面位置

## 项目结构

```
src/
├── components/
│   ├── ComicDisplay.jsx      # 主要漫画展示组件
│   └── ComicDisplay.css      # 组件样式
├── data/
│   └── comics.js             # 漫画数据
├── App.jsx                   # 根组件
├── App.css                   # 根组件样式
├── main.jsx                  # 入口文件
└── index.css                 # 全局样式
```

## 快速开始

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 在浏览器中打开 `http://localhost:3000`

## 技术栈

- React 18
- Vite
- CSS3 (Flexbox, Grid, 媒体查询)
- 响应式设计

## 响应式断点

- **移动端**: ≤ 480px
- **小屏移动端**: 481px - 768px  
- **平板端**: 769px - 1024px
- **PC端**: ≥ 1025px

## 自定义漫画数据

在 `src/data/comics.js` 中修改漫画数据：

```javascript
export const comicsData = [
  {
    id: 1,
    image: "图片URL",
    narration: "旁白文字内容"
  },
  // 添加更多漫画...
];
```

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
