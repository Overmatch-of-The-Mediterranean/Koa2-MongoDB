const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {  // 负责连接.pug和.js文件
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
