// Koa2是nodejs web server框架
// 官方和文档：https://koa.bootcss.com/
// bin/www.js 监听服务
/* Koa2环境搭建
      1.下载脚手架npm i -g koa-generator
      2.koa2 xxx(文件名)。在xxx文件中，创建Koa2项目
      3.npm install,安装项目带的包
      4.启动不成可以将dev改为"nodemon bin/www"

/* Koa2处理http请求
       ctx是req和res的集合
       获取请求体是ctx.request.body
       返回数据是ctx.body
       获取queryString是 ctx.query
       返回JSON格式，则直接写成ctx.body={}这种形式
       路由：写，导出，注册，使用 */