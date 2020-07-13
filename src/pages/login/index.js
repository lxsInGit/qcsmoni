import React, { Component } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { message} from 'antd';
//import {smsCodeData} from '../../http/api'
import './index.scss'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            phone: '',
            picCode: '',
            smsCode: '',
            btnText: '发送验证码',
            disabled: true,
            timer:null,
        }
    }
    goback = () => {
        this.props.history.go(-1)
    }
    changePhone = (ev) => {
        this.setState({
            phone: ev.target.value
        })
    }
    changePic = (ev) => {
        this.setState({
            picCode: ev.target.value
        })
    }
    changeSmsCode = (ev) => {
        this.setState({
            smsCode: ev.target.value
        })
    }
    sendSmsCode = () => {
        let reg = /\S/ //空白符验证
        let rep = /^(13[0-9]|14[56789]|15[0-3,5-9]|166|17[0135678]|18[0-9]|19[89])\d{8}$/;
        let re = /\d{4}/;
        let phone = this.state.phone.trim();
        let picCode = this.state.picCode.trim();
        if (phone === '' || !reg.test(phone)) {
            message.error('手机号码不能为空', 0.5)
        } else if (!rep.test(phone)) {
            message.error('手机号码格式错误', 0.5)
        } else if (!re.test(picCode)) {
            message.error('图片验证码格式错误', 0.5)
        } else
        //格式正确,调用接口获取验证码数据
        {  // smsCodeData().then((res)=>{

            //     console.log(1111,res)
            // })
            let i = 60;
            let timer = setInterval(() => {
                console.log(i)
                this.setState({
                    btnText: '重发(' + i + 's)',
                    disabled: false
                })
                if (i <= 0) {
                    this.setState({
                        btnText: '发送验证码',
                        disabled: true
                    })
                    clearInterval(timer);
                }
                i--;
            }, 1000)
            this.setState({
                timer:timer
            });
        }
    }
    qcsLogin = () => {
        let reg = /\S/ //空白符验证
        let rep = /^(13[0-9]|14[56789]|15[0-3,5-9]|166|17[0135678]|18[0-9]|19[89])\d{8}$/;
        let re = /\d{4}/;
        let phone = this.state.phone.trim();
        let picCode = this.state.picCode.trim();
        let smsCode =this.state.smsCode.trim();
        if (phone === '' || !reg.test(phone)) {
            message.error('手机号码不能为空', 0.5)
        } else if (!rep.test(phone)) {
            message.error('手机号码格式错误', 0.5)
        } else if (!re.test(picCode)) {
            message.error('图片验证码格式错误', 0.5)
        } else if (!re.test(smsCode)) {
            message.error('验证码格式错误', 0.5)
        } else { 
            // const data = {"phone":phone,"smsCode":sms};
			// LoginData(data).then((res)=>{
			// 	console.log(res);
			// 	if(res.data.code === 1){//失败
			// 		message.error(res.data.msg,0.5);
			// 	}else{//成功
            // 将成功的信息保存到缓存
            //localStorage.setItem('token', res.data.data.token);
            //跳转页面
            this.props.history.push('/center');
        }
    }
    componentWillUnmunt(){
        //如果到其他页面时，清除定时器
        clearInterval(this.state.timer );
		this.setState = (state,callback)=>{//
			return;
        }
        
	}
    render() {
        const { btnText, disabled } = this.state
        return <div>
            <div className={'qcs-login-head'}>
                <LeftOutlined className={'item-back'} onClick={this.goback} />
                <div>
                    登录/注册
                </div>
            </div>
            <div className={'qcs-login-form'}>
                <div className={'login-form-img'}>
                    <img src='https://image.watsons.com.cn//upload/46c5e4a3.png' alt='qcs图片' />
                </div>
                <div className={'phone'}><input type='text' placeholder='请输入手机号' name='phone' onChange={this.changePhone} /></div>
                <div className={'picCode'}><div><input type='text' placeholder='请输入图片验证码' name='picCode' onChange={this.changePic} /></div> <div>tupian</div></div>
                <div className={'smsCode'}><div><input type='text' placeholder='请输入验证码' name='smsCode' onChange={this.changeSmsCode} /></div> <div onClick={this.sendSmsCode} className={disabled ? 'btn' : 'togray'}>{btnText}</div></div>
                <div style={{ height: '30px', marginTop: '5px' }}></div>
                <div className={'user-agree'}>
                    <input type='checkbox' />
                    我已阅读并同意<a href='https://h5.watsons.com.cn/topic/serviceAgreement'>用户协议</a>和<a href='https://h5.watsons.com.cn/topic/privacypolicy'>隐私协议</a>
                </div>
                <div className={'login-denglu'} onClick={this.qcsLogin}>
                    登录/注册
                </div>
            </div>
        </div>
    }
}

export default Login;