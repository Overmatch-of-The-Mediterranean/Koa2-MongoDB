
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017';
const dbName = 'comment2';
mongoose.connect(`${url}/${dbName}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
const conn = mongoose.connection;
conn.on('error', err => {
  console.log('连接失败', err);
});
module.exports = mongoose;