const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')

const index = require('./routes/index')
const users = require('./routes/users')
const comments = require('./routes/comments')

// error handler
onerror(app)

// middlewares 中间件
app.use(bodyparser({  // request body转换，获取request body
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

// 静态服务文件，即在浏览器中课直接访问
app.use(require('koa-static')(__dirname + '/public'))

// 服务端模板引擎，和pug语法一起使用，.pug文件地位相当于.vue文件
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

app.keys = ['666'];  // 设置cookie必须要设置密钥
app.use(session({
  // 配置cookie
  cookie: {
    path: '/', // cookie在根目录下都有效
    httpOnly: true, // 只允许服务端操作cookie
    maxAge: 1000 * 60 * 60 * 24 // cookie存在时间
  }
}))
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes 路由
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(comments.routes(), comments.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
