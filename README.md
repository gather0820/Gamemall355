## Setup
```bash
# 后端
cd server && npm i # yarn

npm run start

# 前端
cd client && npm i # yarn

npm run dev

npm run dev:admin


## 技术栈
1. 前台C端
  - Vue
  - Vue-route
  - Vuex
  - element-ui
  - webpack
  - ...
2. 管理端
  - express
  - node
  - jsonwebtoken
  - socket.io
  - nodemon
  - mongodb
  - nodemailer // 基于node的邮件推送功能
  - ...

## 部署说明
1. 环境要求: 
  - 环境启动3306；检查：localhost：3306是否能访问通，不能则检查数据库是否启动
  - 新建对应的数据库，具体数据库环境可见server/config配置中，新建的数据库名和config需对应
2. 进入client/server目录分布执行npm install
3. 进入server目录执行npm run start(这是启动api接口)
4. 进入client目录执行npm run dev(这是启动C端项目)
5. 同样在client目录执行npm run dev:admin(启动管理后台)
6. 访问localhost:8080前台地址；localhost:8081后台管理地址
