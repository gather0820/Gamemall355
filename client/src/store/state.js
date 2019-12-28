import {getLocalItem} from '../util/util';
const state = {
  //后台管理 back-stage management
  adminToken: getLocalItem("adminToken") ? getLocalItem("adminToken") : null,
  adminName: getLocalItem("adminName") ? getLocalItem("adminName") : "",
  //客户商城 Customer mall
  clientName: getLocalItem("clientName") ? getLocalItem("clientName") : "",
  clientToken: getLocalItem("clientToken") ? getLocalItem("clientToken") : null
};

export default state;
