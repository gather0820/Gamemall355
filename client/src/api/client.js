import axios from '../config/axios-client';

//用户登录 User login
export function login(data){
	const res = axios.post('/api/user/login',data);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve(json.data);
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//用户注册 User registration
export function signup(data){
	const res = axios.post('/api/user/signup',data);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve(json.data);
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//得到类目 User registration
export function getTypes(){
	const res = axios.get('/api/admin/getType');
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve(json.data);
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//获得不同类目的商品 Get different categories of goods
export function getGoodsList(typeId){
	const res = axios.get('/api/mall/getGoodsByType?typeId='+typeId);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve(json.data);
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//获得商品详情页信息 Get product details page information
export function getGoodsInfo(id){
	const res = axios.get('/api/mall/getGoodsInfo?id='+id);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve(json.data);
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//获得商品详情页问答区数据 Get the question and answer area data of the commodity details page
export function getGoodsMsg(id){
	const res = axios.get('/api/mall/getGoodsMsg?id='+id);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve(json.data);
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//发送商品msg Send commodity information
export function askGoodsMsg(data){
	const res = axios.post('/api/mall/askGoodsMsg',data);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve();
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//加入购物车 add to basket
export function addOrder(data){
	const res = axios.post('/api/mall/addOrder',data);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve();
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//获得用户订单列表 Get a list of user orders
export function getOrderByState(state,token){
	const res = axios.get('/api/mall/getOrderByState?state='+state+'&token='+token);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve(json.data);
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//删除订单 Delete an order
export function deleteOrder(id){
	const res = axios.delete('/api/mall/deleteOrder?id='+id);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve();
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//确认收货 Confirmation of receipt
export function confirmReceive(id){
	const res = axios.get('/api/mall/confirmReceive?id='+id);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve();
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//确认付款 confirm the payment
export function pay(id){
	const res = axios.get('/api/mall/pay?id='+id);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve();
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//获得用户资料 Obtain user information
export function getUserData(token){
	const res = axios.get('/api/user/data?token='+token);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve(json.data);
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//更改用户资料 Change user profile
export function updateUserData(data){
	const res = axios.post('/api/user/updateUserData',data);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve();
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//更改用户密码 Change user password
export function updatePwd(data){
	const res = axios.post('/api/user/updatePwd',data);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve();
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//结算购物车 Settlement basket
export function settleAccounts(data){
	const res = axios.post('/api/mall/settleAccounts',data);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve();
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//发送评价 Send evaluation
export function sendComment(data){
	const res = axios.post('/api/mall/sendComment',data);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve();
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//获得商品评论 Get product reviews
export function getComment(goodsId){
	const res = axios.get('/api/mall/getGoodsComment?goodsId='+goodsId);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve(json.data);
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}

//关键词搜索商品 Keyword search for goods
export function searchGoods(keyword=''){
	const res = axios.get('/api/mall/searchGoods?keyword='+keyword);
	return new Promise((resolve,reject)=>{
		res
		.then((result)=>{
	        if(result.status===200){
	        	return result.data;
	        }else{
	        	reject(result.status)
	        }
	    })
	    .then((json)=>{
    		if(json.code===0){
                resolve(json.data);
            }else{
                reject(json.message);
            }
    	})
	    .catch((e)=>{
	    	reject(e.toString())
	    })
	})
}