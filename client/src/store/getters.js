const getters = {
  // 管理端系统 Management system
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  language: state => state.app.language,

  // 管理端-用户 Management-user
  adminToken: state => state.userAdmin.adminToken,
  adminName: state => state.userAdmin.adminName,

  // 客户端-用户 Client-user
  clientToken: state => state.userClient.clientToken,
  clientName: state => state.userClient.clientName
};

export default getters;

