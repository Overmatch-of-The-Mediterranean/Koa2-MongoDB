const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('x-response-time');
  console.log(`${ctx.method}  ${ctx.url} - ${rt}ms`);
});
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('x-response-time', `${ms}`);
});
app.use(async (ctx, next) => {
  ctx.body = 'Hello World';
});
app.listen(3000);