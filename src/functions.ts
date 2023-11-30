import instance from "./axios"


 const getUserDetails= async ()=>{
    const request= await instance.get('/user');
    return request.data;
}
 const getWalletDetails= async ()=>{
    const request= await instance.get('/wallet');
    return request.data;
}
 const getTransactions= async ()=>{
    const request= await instance.get('/transactions');
    return request.data;
}

export { getUserDetails, getWalletDetails, getTransactions }