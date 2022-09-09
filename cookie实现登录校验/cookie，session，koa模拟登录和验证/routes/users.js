const router = require('koa-router')()
const { User } = require('../db/model')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// 模拟登录
router.get('/session-mock', async (ctx, next) => {
  let str = ''
  const query = ctx.query
  if (query.username) {
    ctx.session.userInfo = {
      username: query.username
    }
    str = 'login ok'
  } else {
    str = 'login fail'
  }
  ctx.body = str
})

// 登陆验证
router.get('/session-check-mock', async (ctx, next) => {
  ctx.body = ctx.session.userInfo || {}
})

// 登录
// 登录要用post，为了方便测试，暂时使用get
router.get('/login', async (ctx, next) => {
  const { username, password } = ctx.query
  const user = await User.findOne({
    username,
    password
  })
  if (user) {
    ctx.session.userInfo = user
    ctx.body = user
    return
  }
  ctx.body = '用户名或密码错误'
})
module.exports = router
