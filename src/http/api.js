//所有的获取数据的api
import http from "./index";

//1.秒杀数据
export const miaoshaData = async ()=>{
    return await http.get('activity/specials/info?count=8&code=Home_flashSale__Top_Img&stock_code=&device_id=a62ee360-bb2b-11ea-b493-15a8461d92f9');
}

//2.爆品data
export const baopinData = async (group_id)=>{
    return await http.get('item/ws/group_list?current_page=1&page_size=12&group_id='+group_id+'&device_id=a62ee360-bb2b-11ea-b493-15a8461d92f9');
}

//3.listData
export const listData = async (current_page)=>{
    return await http.get('item/ws/group_list?current_page='+current_page+'&page_size=24&group_id=32496&device_id=dd1e7f70-c42c-11ea-9d4e-754709200967');
}

//4.login验证码借口
export const smsCodeData = async ()=>{
    return await http.get('http://192.168.2.251:7001/sms/addSms?phone=15012345678');
}