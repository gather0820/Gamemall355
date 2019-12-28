## Setup
```bash
# 后端 server
cd server && npm i # yarn

npm run start

# 前端 client
cd client && npm i # yarn

npm run dev

npm run dev:admin


## 技术栈 technology stack
1. 前台C端 front end
  - Vue
  - Vue-route
  - Vuex
  - element-ui
  - webpack
  - ...
2. 管理端 back end
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
   Enter the client/server directory distribution to execute npm install
3. 进入server目录执行npm run start
   Enter the server directory to execute npm run start
4. 进入client目录执行npm run dev
   Enter the client directory to execute npm run dev
5. 进入client目录执行npm run dev:admin
   Enter the client directory to execute npm run dev:admin
6. 访问localhost:8080前台地址；localhost:8081后台管理地址
