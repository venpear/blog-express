## express+mongodb+mongoose blog后台api
* 环境
  > express + mongoose
  
  [项目地址](https://github.com/venpear/blog-express)： https://github.com/venpear/blog-express

* 启动
```
npm start
```

## 项目搭建
* express 项目生成器 项目初始化构建

``` 
$ npm install -g express-generator
$ express myapp
$ cd myapp
$ npm install

```

## [mongoose](https://www.npmjs.com/package/mongoose)
首先安装nodejs和mongodb

```
$ npm install mongoose
```
### 连接mongodb

```
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');
```
### 构建可操作数据库的Modal类型
* Schema 初始化（数据modal的模型）

```
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
var UserScheme = new Schema({
    userid: ObjectId,
    username: String,
    password: String,
    date: Date
})
```
* Modal 创建

```
var user = mongoose.modal('User', UserSchema);
```
以UserSchema为模型创建了一个叫‘User’的Modal(对应mongodb中的集合名--表)，并赋值给user变量
### 操作Modal数据
* 保存数据

```
user.save(function(err) {
  // do someing
})
```
* 查询数据

```
user.find(function() {
  // docs.forEach
})
or can use fintOne, findById, update
```

## API文档
* 用户（user）

| 名称 | 方式 | 说明 |
|-----|------|-----|
|/users| POST| 添加用户|
|/users| GET | 获取用户list|
|/users/：id| GET | 获取单个用户info|
|/users/：id| PUT | 更新用户信息 |
|/users/：id| DELETE | 删除用户 |
|/sigin| POST | 用户登录 |


