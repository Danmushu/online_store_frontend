
const API = "http://localhost:5002/api";

// 用户登录
export function loginUser(userData){
    return fetch(API + "/auth", {method: "POST", body: JSON.stringify(userData)})
}

// 用户注册
export function registerUser(userData){
    return  fetch(API + "/auth/register", {method: "POST", body: JSON.stringify(userData)})
}


// 获取商品信息
export function getProduct(queryData){

    // 查询单个 详细信息 （如果带了id 自动走这个）
    if (queryData.id){
        return fetch(API + "/product/" + queryData.id, {method: "GET"})
    }

    // 查询多个
    // 构建query string
    let qs = "?"
    for (const key in queryData){
        qs += key + "=" + queryData[key] + "&"
    }
    return fetch(API + "/product" + qs  , {method: "GET"})
}

// 创建订单
export function postOrder(productIDs){
    return  fetch(API + "/order", {method: "POST", body: JSON.stringify({productIDs: productIDs})})
}

// 添加购物车物品
export function addCartItem(itemID){
    const s = localStorage.getItem("cartItems")
    const cart = s? JSON.parse(s) : []

    // 已经存在
    if (cart.indexOf(itemID) !== -1){
        console.info(itemID + "已经存在购物车")
        return
    }
    console.info(itemID + "添加成功购物车")
    cart.push(itemID)
    localStorage.setItem("cartItems", JSON.stringify(cart));

}

// 删除购物车物品
export function delCartItem(itemID){
    const s = localStorage.getItem("cartItems")
    const cart = s? JSON.parse(s) : []

    localStorage.setItem("cartItems", JSON.stringify(cart.filter(item => item !== itemID)));

}


// 列出购物车
export function listCartItems(){
    const s = localStorage.getItem("cartItems")
    return s ? JSON.parse(s).filter(item => item !== null) : []
}

// 清空购物车
export function cleanCartItems(){
    localStorage.setItem("cartItems", JSON.stringify([]));

}
