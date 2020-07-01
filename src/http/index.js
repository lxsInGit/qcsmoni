import axios from 'axios';
import qs from 'qs';//对参数进行序列化操作
// import { Modal} from 'antd';

//需求：当数据未加载时，显示旋转的小图标，当数据加载完成后隐藏
//默认地址
const base = '';

//请求拦截前的配置
axios.interceptors.request.use(
config=>{
    return config;
},
err =>{
    console.log("请求超时");
    return Promise.reject(err)
}
)

//返回后的拦截
axios.interceptors.response.use(
    data=>{
        return data
    },
    err=>{
        if( err.response.status === 404){
            console.log('页面地址输入错误！');
        }else if(err.response.status === 401){
            console.log('登录信息失败，请求参数有问题');
        }else if(err.response.status === 504 ||err.response.status === 500 ){
            console.log('服务器错误');
        }else if(err.response.status === 405){
            console.log('请求方式不对');
        }
        return Promise.reject(err)
    }


)

let http = {
    post:'',
    get:''
}

/*
api  ：url地址
data： 参数
*/
http.post  = function (api,data){
    //参数的序列化
    let params = qs.stringify(data);
    return new Promise((resolve,reject)=>{
        axios.post(base+api,params).then((res)=>{
            resolve(res);
        })
    })
}


http.get  = function (api,data){
    //参数的序列化
    let params = qs.stringify(data);
    return new Promise((resolve,reject)=>{
        axios.get(base+api,params).then((res)=>{
            resolve(res);
        })
    })
}
    //输出
export default http;