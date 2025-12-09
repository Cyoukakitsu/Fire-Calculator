# 🔥 FIRE 自由之路计算器 (FireFlow)

一个极简、现代化的 Web 应用程序，旨在帮助用户可视化财务自由（Financial Independence, Retire Early）的路径。通过输入当前的财务状况和投资策略，实时推演资产增长曲线与预计退休年龄。

## ✨ 主要功能

* **实时推演**：基于当前的储蓄、收支和预期收益率，自动计算 FIRE 达成时间。
* **可视化图表**：使用面积图（Area Chart）直观展示未来 30+ 年的资产复利增长趋势。
* **财富构成分析**：清晰展示“本金投入”与“市场复利回报”的比例，体现投资的价值。
* **现代 UI 设计**：基于 Tailwind CSS 构建的仪表盘风格界面，简洁美观。

## 🛠 技术栈

* **核心框架**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
* **样式库**: [Tailwind CSS](https://tailwindcss.com/)
* **图表库**: [Recharts](https://recharts.org/) (用于数据可视化)
* **图标库**: [Lucide React](https://lucide.dev/)
* **测试 (可选)**: Vitest (用于核心计算逻辑测试)

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone [https://github.com/your-username/fire-calculator.git](https://github.com/your-username/fire-calculator.git)
cd fire-calculator
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动本地开发服务器
```bash
npm run dev
```

## 📂 项目结构

```text
src/
├── components/
│   ├── ResultCard.jsx   # 结果展示卡片 (包含图表与财富构成分析)
│   └── InputRow.jsx     # 输入框组件 (封装了 Label 和 Input)
├── utils/
│   └── fireLogic.js     # 核心计算逻辑 (纯函数，可独立测试)
├── Home.jsx             # 主页面 (包含状态管理和布局)
├── App.jsx              # 根组件
├── main.jsx             # React 入口文件
└── index.css            # Tailwind CSS 配置文件
```

## 📝 开发计划 (To-Do)
- [ ] **UI 设计**: 实现仪表盘风格的界面 (Tailwind CSS)
- [ ] **高级设置**: 添加“通货膨胀率”调节功能
- [ ] **交互优化**: 支持移动端响应式适配
- [ ] **主题切换**: 支持深色模式 (Dark Mode)
- [x] **核心功能**: 完成 FIRE 基础推算逻辑 (MVP)
- [x] **数据可视化**: 集成 Recharts 展示资产增长趋势图
- [x] **AI 助手**: 集成 AI 聊天功能 (基于 LLM 进行财务咨询)

## 📄 License

MIT License
