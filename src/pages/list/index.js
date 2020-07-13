import React, { Component } from 'react';
import { listData } from '../../http/api'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


import './index.scss';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


class List extends Component {
    constructor() {
        super();
        this.state = {
            listdatas: [],
            page: 1,
            end: false//false 还没到底  ，true 到底了
        }
    }
    componentDidMount() {
        
        listData(1).then(res => {
            let datalist = res.data.data.item_list
            this.setState({
                listdatas: datalist
            })
        })
        this.Scroll()
    }
    Scroll = () => {
        window.onscroll = () => {
            //滚动高度
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop

            //获取窗口的可是高度
            let clientTop = document.documentElement.clientHeight
            let scrollHeight = document.body.scrollHeight;
            //console.log(scrollTop,clientTop,scrollHeight)
            if (scrollHeight - scrollTop <= clientTop + 10) {
                console.log('正在加载数据')
                this.getMoreListData(this.state.page)
                this.setState({
                    page: this.state.page + 1
                })
            }
        }
    }
    getMoreListData = (page) => {
        console.log(page)
        listData(page).then(res => {
            let datalist = res.data.data.item_list
            if (datalist === undefined) {
                console.log("全部数据已经加载");
                this.setState({
                    end: true
                })
            } else {
                let oldArr = this.state.listdatas;
                let newArr = [];
                newArr = oldArr.concat(datalist);
                this.setState({
                    listdatas: newArr
                })
               // console.log(oldArr);
            }

        })
    }
    componentWillUnmunt(){
		window.onscroll = undefined;//如果到其他页面时，你的滚动事件报错
		this.setState = (state,callback)=>{//
			return;
		}
	}
    render() {
        const { listdatas ,end} = this.state
        return <div>
          { end?<Spin indicator={antIcon} className={'loaded'} />:(<div className={'list-page-items'}>
                <div className={'list-page-item-top'}><img src='https://image.watsons.com.cn//upload/a2174625.jpg?x-oss-process=image/quality,q_80' alt='头' /></div>
                <div className={'list-page-item-outer'}>
                    {
                        listdatas.map((item,index) => {
                            return <div className={'list-page-item'} key={index}>
                                <div className={'list-item-img'}><img src={item.over_image_url} alt='item' /></div>
                                <div className={'list-item-text'}>
                                    <div>{item.item_short_name}</div>
                                    <div><span>¥{item.max_price / 100}</span><span>¥{item.max_market_price / 100}</span></div>
                                    <div>立即购买</div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>)}
        </div>
    }
    

}

export default List;