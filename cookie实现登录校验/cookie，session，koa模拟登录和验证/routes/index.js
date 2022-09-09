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

// 测试session，记录访问次数
router.get('/session', async (ctx, next) => {
  // 每次访问都拿到，当前用户的session
  if (ctx.session.viewCount == null) {
    ctx.session.viewCount = 0;
  }
  ctx.session.viewCount++;
  ctx.body = {
    title: 'session',
    viewCount: ctx.session.viewCount
  }
})

module.exports = router
