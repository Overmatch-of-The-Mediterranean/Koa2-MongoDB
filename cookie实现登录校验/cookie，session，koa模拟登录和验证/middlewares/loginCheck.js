async function loginCheck(ctx, next) {
  const userInfo = ctx.session.userInfo;
  if (userInfo) {
    await next();
    return;
  }
  ctx.body = {
    errno: -1,
    message: '请登录'
  }
}
module.exports = loginCheck