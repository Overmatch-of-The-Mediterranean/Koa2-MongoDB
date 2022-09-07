const { User } = require('./model');
!(async () => {

  //新增数据
  // 新增数据的第一种方法
  // const zhangsan = new User({
  //   userName: 'zhangsan',
  //   password: 'hhh',
  //   age: 18,
  //   gender: 1
  // });
  // zhangsan.save();

  // 新增数据的第二种方法
  // const lisi = await User.create({
  //   userName: 'lisi',
  //   password: '111',
  //   age: 20
  // })

  // 查询数据
  // find() 返回数组，元素为对象
  // const UserList = await User.find()
  // const UserList = await User.find().sort({ _id: -1 });
  // const UserList = await User.find({ userName: 'zhangsan' }).sort({ _id: -1 });
  // console.log(UserList);

  // 查询单条数据，返回对象
  // const user = await User.findOne({ userName: 'lisi' });
  // console.log(user);

  // 更新数据
  // const update = await User.findOneAndUpdate(
  //   { userName: 'zhangsan' },
  //   { age: 100 },
  //   { new: true }  //是否返回更新后的数据,不设置，默认为false
  // )
  // console.log(update);

  // 删除数据
  // const deleteResult = await User.remove({ age: 18 })
  // console.log(deleteResult);
})()