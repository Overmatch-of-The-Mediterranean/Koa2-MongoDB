// MongoDB的启动：在bin目录下，打开命令行，输入mongod.exe --dbpath D:\MongoDB\data\db
// 连接MongoDB：在bin目录下，再次启动命令行，输入mongo.exe
// compass操纵MongoDB

/* 命令行操纵MongoDB：在连接上MongoDB后，
                    show dbs -- 展示数据库
                    use xxx -- 使用那个数据库，若没有，则自动创建
                    show collection -- 展示数据库中的集合
                    db.集合.操作 -- 此时的db是指当前使用的数据库，使用方法操作数据库，如,增：insert({})，查：find({}) */

// MongoDB可以成为数据库系统服务
// 一个数据库系统可以对接许多服务
/* MongoDB的基本概念：
      数据库：
            1.数据库是业务的数据容器
            2.一个业务的数据，要分类管理，如，留言板项目中的，用户数据，评论数据
      集合：数据库中，数据的分类
      文档：集合中的一条数据，可被增删改查
      bson：全称，binary json,二进制类型的json，数据库以字符串形式显示，MongoDB以二进制形式存储数据
      noSQL：非关系型数据库，如，MongoDB，易上手易使用 */