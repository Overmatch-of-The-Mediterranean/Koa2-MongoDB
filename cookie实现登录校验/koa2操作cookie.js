const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
  ctx.body = 'hello world111';

  // 设置cookie
  ctx.cookies.set('c', '300');

  // 获取cookie
  const CookieStr = ctx.cookies.get('c');
  console.log(CookieStr);

  // 结构化Koa2已经做好
});
app.listen(3000);