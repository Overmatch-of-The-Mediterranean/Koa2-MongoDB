// mongodb数据格式过于灵活，不利于多人合作开发，需要mongoose规范数据格式

/* mongooses
      1.Schema 定义数据格式的规范
      2.Model 生成定义Schema的集合，规范collection
      3.规范数据操作的API，即基于Model操作数据，如，find(),create()等 */


// 首先安装mongoose npm模块  npm i mongoose --save