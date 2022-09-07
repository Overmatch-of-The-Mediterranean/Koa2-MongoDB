const router = require('koa-router')();
const { Comment } = require('../db/model');
router.prefix('/api');

// 获取留言列表
router.get('/list', async (ctx) => {
  const query = ctx.query;
  console.log(query);
  const comments = await Comment.find();
  ctx.body = {
    errno: 0,
    data: comments
  };
})

// 创建留言
router.post('/create', async (ctx) => {
  const body = ctx.request.body;
  console.log(body);
  const newComment = await Comment.create({
    comment: body.comment,
    userName: body.userName
  });
  ctx.body = {
    errno: 0,
    message: '成功',
    body: newComment
  };
})
module.exports = router