import axios from "../config/axios-admin";

//管理员登录 admin login
export function login(data) {
  const res = axios.post("/api/admin/login", data);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve(json.data);
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//获取所有用户信息 Get all user information
export function getAllUser() {
  const res = axios.get("/api/admin/allUser");

  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve(json.data);
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//删除指定用户 Delete the specified user
export function deleteUser(id) {
  const res = axios.delete("/api/admin/deleteUser?id=" + id);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve();
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//更改会员用户资料 Change member user profile
export function updateUserData(data) {
  const res = axios.post("/api/user/updateUserData", data);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve();
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//搜索用户 Search for users
export function getSearchUser(val) {
  const res = axios.get("/api/admin/searchUser?word=" + val);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve(json.data);
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//更改密码 Change password
export function changePwd(data) {
  const res = axios.post("/api/admin/changePwd", data);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve();
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//得到未回复的信息 Get unanswered messages
export function getNoReplyMsg() {
  const res = axios.get("/api/admin/noReplyMsg");
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve(json.data);
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//得到已回复的信息 Get the replied message
export function getRepliedMsg() {
  const res = axios.get("/api/admin/repliedMsg");
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve(json.data);
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//得到已回复的信息 Get the replied message
export function reply(data) {
  const res = axios.post("/api/admin/reply", data);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve();
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//得到订单 Get order
export function getOrders(state) {
  const res = axios.get("/api/admin/orders?state=" + state);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve(json.data);
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//得到订单 Get order
export function getAOrder(id) {
  const res = axios.get("/api/admin/order?id=" + id);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve(json.data);
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//修改订单 Change order
export function changeOrder(data) {
  const res = axios.post("/api/admin/changeOrder", data);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve();
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}
 
//删除指定用户 Delete the specified user
export function deleteOrder(id) {
  const res = axios.delete("/api/admin/deleteOrder?id=" + id);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve();
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//得到商品 Get the goods
export function getGoods(id) {
  const res = axios.get("/api/admin/getGoodsByType?typeId=" + id);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve(json.data);
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//得到类目 Get the directory
export function getTypes() {
  const res = axios.get("/api/admin/getType");
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve(json.data);
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//增加类目 add directory
export function addType(data) {
  const res = axios.post("/api/admin/addType", data);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve();
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//得到商品信息 Get commodity information
export function getGoodsInfo(id) {
  const res = axios.get("/api/admin/getGoodsInfo?id=" + id);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve(json.data);
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//增加商品 add goods
export function addGoods(data) {
  const res = axios.post("/api/admin/addGoods", data);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve();
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//增加规格 Increase specification
export function addSpec(data) {
  const res = axios.post("/api/admin/addSpec", data);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve(json.data);
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//删除规格 Delete specification
export function deleteSpec(data) {
  const res = axios.post("/api/admin/deleteSpec", data);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve();
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//更新商品信息 Update commodity information
export function updateGoods(data) {
  const res = axios.post("/api/admin/updateGoods", data);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve();
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}

//删除指定商品 Delete specified goods
export function deleteGoods(id) {
  const res = axios.delete("/api/admin/deleteGoods?id=" + id);
  return new Promise((resolve, reject) => {
    res
      .then(result => {
        if (result.status === 200) {
          return result.data;
        } else {
          reject(result.status);
        }
      })
      .then(json => {
        if (json.code === 0) {
          resolve();
        } else {
          reject(json.message);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}
