# 项目介绍
本项目是基于SaaS模式的人力资源管理系统。不同于传统的人力资源软件应用，使用者只需打开浏览器即可管理薪酬、绩效、社保、入职离职等。

当前只是前端部分，后端部分请访问 [https://github.com/siyiyimiaozhong/hrm-backend](https://github.com/siyiyimiaozhong/hrm-backend)


## 运行

### 1. 安装 nodejs

https://nodejs.org/en/

### 2. 配置 API 地址

编辑文件 config/index.js

修改 `api` `upfile` 转发配置

```js
module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    proxyTable: {
      '/api': {
        target: 'ip',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/upfile': {
        target: 'ip',
        changeOrigin: true,
        pathRewrite: {
          '^/upfile': ''
        }
      }
    },
```

### 3. 运行

```sh
npm start
```
