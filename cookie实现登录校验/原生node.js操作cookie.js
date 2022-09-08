
const http = require('http');
const server = http.createServer((req, res) => {

  // 设置cookie
  res.setHeader('Set-Cookie', 'b=200');
  // 获取cookie
  console.log('cookie id', req.headers.cookie);
  // 结构化cookie
  const CookieObj = {};
  const CookieStr = req.headers.cookie;
  CookieStr.split(';').forEach(CookieItem => {
    const arr = CookieItem.trim().split('=');
    const key = arr[0];
    const val = arr[1];
    CookieObj[key] = val;
  })
  console.log(CookieObj);
  res.end('Cookie!');
})
server.listen(3000);