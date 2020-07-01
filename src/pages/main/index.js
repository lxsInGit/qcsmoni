import React, { Component } from 'react';
import { miaoshaData, baopinData } from '.././../http/api';
import Miaosha from './components/miaosha';
import Baopin from './components/baopin'
import './index.scss'


class Main extends Component {
    constructor() {
        super();
        this.state = {
            startT: 0,
            endT: 0,
            miaoshaList: [],
            baoping:[
                {'name':'畅销必入','id':0,'group_id':33177},
                {'name':'网红力介','id':1,'group_id':33178},
                {'name':'限时低价','id':2,'group_id':33179},
                {'name':'自营爆款','id':3,'group_id':33180}
            ],
            defaultId:0,
            baopinList:[]

        }
    }
    
    componentDidMount() {
        miaoshaData().then((res) => {
            console.log(res)
            this.setState({
                startT: res.data.data.now,
                endT: res.data.data.specials_time_ranges[0].end,
                miaoshaList: res.data.data.specials_item_v_o_s

            })
        })
        this.getbaopinData(33177);  
    }
    getbaopinData=(group_id)=>{
        baopinData(group_id).then((res)=>{
            console.log(res)
            this.setState({
                baopinList: res.data.data.item_list
            })
        })
    }
    changeTabBaopin=(value)=>{
            this.setState({
                defaultId:value.id
            });
            this.getbaopinData(value.group_id);
    }
    componentWillUnmount(){
        //没有渲染完的dom，停止渲染
       this.setState = (state,callback)=>{
           return
       }
    }
    render() {
        const {miaoshaList,startT,endT,baopinList,baoping,defaultId } = this.state
        return <div>
           {startT!==0&&endT!==0?<Miaosha miaosha={miaoshaList} startTime={startT}  endTime={endT}/>:''}
           {/* 爆屏*/}
           <ul className={'baopintabbar'}>
               {
                   baoping.map((item,index)=>{
                   return <li key={item.id} onClick={this.changeTabBaopin.bind(this,item)} className={defaultId===item.id?'selectBaopin':''}>{item.name}</li>
                   })
               }
               
           </ul>
            <Baopin baopinlist={baopinList}/>
        </div>
    }
}

export default Main;