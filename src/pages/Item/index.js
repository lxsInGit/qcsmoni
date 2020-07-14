import React, { Component } from 'react';
import withGoBack from '../../hoc'
import { LeftOutlined, HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
// import { Badge } from 'antd';
// import {Link} from 'react-router-dom'
import './index.scss'

class Item extends Component {
    constructor(){
        super();
        this.state={
            totalNum:0,
            cartlist:[]
        }
    }
    componentDidMount(){
        let nowShopCart =  JSON.parse(window.localStorage.getItem('shopcart'))
        if(nowShopCart!==null) {
            this.setState({
                cartlist:nowShopCart
            })
            this.countTotalNum(nowShopCart)
           // console.log(this.state.totalNum)
        }
       // console.log(nowShopCart)
    }
 
    appendshop=(value)=>{
       // console.log(value)
        let data = [];
        let type= true;
        let nowShopCart =  JSON.parse(window.localStorage.getItem('shopcart'))
        let dataObj ={
            id:value.item_id,
            name:value.sku_name,
            image_url:value.image_url,
            promotion_price:value.promotion_price/100,
            market_price:value.market_price/100,
            num:1
        }
        if(nowShopCart!==null&&nowShopCart.length) {
           
            nowShopCart.map((item)=>{
                if(dataObj.id===item.id){
                   item.num++
                   type=false
                }
                data.push(item)
                return null
            })
            this.countTotalNum(data)
            //console.log()
        }
        if(type){
            data.push(dataObj)
        }
        
        window.localStorage.setItem('shopcart',JSON.stringify(data))
        // console.log(nowShopCart)
    }
    countTotalNum=(data)=>{
        let totalNum = 0
        data.map((item)=>{
            return item.num?totalNum+=item.num:totalNum+=1
        })
        this.setState({
            totalNum:totalNum
        },()=>{
            console.log(this.state.totalNum)
        })
       
    }
    goShopCart=()=>{
        this.props.history.push('/cart')
    }
    tomainPage=()=>{
        this.props.history.push('/')
    }
    render() {
        //console.log(this.props)
        const itemData = this.props.location.state
         const {totalNum} = this.state
        return <div>
            <div className={'qcs-item-head'}>
                <LeftOutlined className={'item-back'} onClick={this.props.goBack} />
                <div>
                    {itemData.item_short_name.split(' ')[0]}
                </div>
            </div>
            <div className={'qcs-item-content'}>
                <img src={itemData.image_url} alt={'item图片'} />
            </div>
            <div className={'item_icon'}>
                <div onClick={this.tomainPage}><HomeOutlined style={{fontSize:16}}/><span>首页</span></div>
               <div onClick={this.goShopCart}><ShoppingCartOutlined style={{fontSize:16}} /><span>购物车</span></div>{totalNum}
            </div>
            <ul className={'item-footer_bar'}>
            
                <li onClick={this.appendshop.bind(this,itemData)}>加入购物车</li>
                <li>立即购买</li>
            </ul>
            
        </div>
    }
}

export default withGoBack(Item);