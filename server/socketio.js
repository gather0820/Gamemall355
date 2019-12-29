var socket_io = require('socket.io')
var socketio = {} // 获取io Get io
let clientList = {} // 客户端连接用户 The client connects to the user
let adminList = {} 
let io = null

socketio.getSocketio = function(server) {
  // http(s) server
  io = socket_io.listen(server)

  // 管理端 admin
  let admin = io.of('/admin').on('connection', function(socket) {
    console.log('ADMIN_connection:' + socket.id)
    let token = socket.handshake.query.token
    adminList[socket.id] = {
      // isLogin:
      token
    }
    console.log(adminList)
    socket.on('disconnect', function(item) {
      console.log('disconnect: ' + socket.id)
      delete adminList[socket.id]
      console.log(adminList)
    })
  })

  // 客户端 client
  let client = io.of('/client').on('connection', function(socket) {
    console.log('CLIENT_connection:' + socket.id)
    let token = socket.handshake.query.token
    clientList[socket.id] = {
      // isLogin:
      token
    }
    console.log(clientList)
    socket.on('disconnect', function(item) {
      console.log('disconnect: ' + socket.id)
      delete clientList[socket.id]
    })
  })
}

// 客户端订单变更通知 Client order change notification
socketio.messageOrder = function name(params) {
  io.of('/client').emit('messageOrder', params)
}

module.exports = socketio
