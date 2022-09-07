// 规范数据格式
const mongoose = require('./db');

// 定义User Schema(数据格式的规范)
const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    require: true, // 不能为空
    unique: true  // 唯一，不重复
  },
  password: String,
  age: Number,
  gender: 0  // 0未知 1男 2女
}, {
  timestamps: true  // 时间戳，自动添加文档的创建时间等
});
// User Model
const User = mongoose.model('user', UserSchema);  // 第一个参数表示集合中文档代表什么，集合名字就是第一个参数加上s

// 定义Comment Schema(数据格式的规范)
const CommentSchema = mongoose.Schema({
  comment: {
    type: String,
    require: true
  },
  userName: String
});

// Comment Model
const Comment = mongoose.model('comment', CommentSchema);
module.exports = { User, Comment };