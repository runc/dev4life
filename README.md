# Dev4Life

个人作品集网站 - 一个简洁优雅的开发者个人展示页面

🔗 **在线访问：** https://dev4life-peach.vercel.app/

## 项目简介

这是一个静态网站项目，用于展示个人作品和项目。网站包含以下板块：

- 关于
- 开源项目
- 商业项目
- 联系方式

## 技术栈

- HTML5
- CSS3
- JavaScript
- 部署平台：Vercel

## 项目结构

```
.
├── index.html          # 主页面
├── vercel.json         # Vercel 部署配置
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # JavaScript 脚本
├── assets/             # 静态资源
└── public/
    └── _headers        # HTTP 头配置
```

## 本地运行

直接用浏览器打开 `index.html` 文件即可预览。

或使用本地服务器：

```bash
# 使用 Python
python -m http.server 8000

# 或使用 Node.js
npx serve
```

然后访问 `http://localhost:8000`

## 部署

项目已配置 Vercel 自动部署。推送到主分支后会自动触发部署。

## License

MIT
