const router = require('koa-router')();

router.prefix('/api');

router.get('/list', async (ctx) => {
  const query = ctx.query;
  console.log(query);
  ctx.body = {
    errno: 0,
    data: [
      { user: "zs", age: 18 },
      { user: "ls", age: 20 },
      { user: "ww", age: 22 },
    ]
  };
})
router.post('/create', async (ctx) => {
  const body = ctx.request.body;
  console.log(body);
  ctx.body = 'create api';
})
module.exports = router