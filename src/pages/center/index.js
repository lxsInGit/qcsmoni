import React, { Component } from 'react';
import { Button } from 'antd';
//引入验证token的接口
// import { tokenData } from '../../http/api';

class Center extends Component {
   
        //获取登录是否成功的状态
        // tokenData().then((res)=>{
        // 	console.log(res);
        // 	if(res.data.code === 0){
        // 		this.setState({
        // 			tokenType:true
        // 		})
        // 	}else{
        // 		this.setState({
        // 			tokenType:false
        // 		})
        // 	}
        // });
    //退出
    logout = () => {
        localStorage['token'] = "";
        this.props.history.push('/login');
    }
    render() {
            return (
                <div>用户中心
                    <Button type="primary" onClick={this.logout}>退出</Button>

                </div>
            )
    }
}

export default Center;