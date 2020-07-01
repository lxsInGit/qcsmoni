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