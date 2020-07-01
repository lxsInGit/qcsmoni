import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Miaosha extends Component {
    constructor() {
        super();
        this.state = {
            daojishi: ['00', '00', '00']
        }
    }

    componentDidMount() {

            let miaoshaTime = this.props.endTime - this.props.startTime;
            setInterval(() => {
                miaoshaTime -= 1000;
                let time = this.formatTime(new Date(miaoshaTime));

                this.setState({
                    daojishi: time
                })

            }, 1000);


    }
    formatTime = (date) => {
        let time = date / 1000;
        const s = Math.floor(time % 60);
        const m = Math.floor(time / 60 % 60);
        const h = Math.floor(time / 60 / 60 % 24);
        return [h, m, s].map(this.addZero);
    }
    addZero = (n) => {
        n = n.toString();
        return n[1] ? n : "0" + n
    }
    componentWillUnmount(){
        //没有渲染完的dom，停止渲染
       this.setState = (state,callback)=>{
           return
       }
    }
   
    render() {
        const { miaosha } = this.props
        const {daojishi} = this.state
        return <div>
            <div className={'miaosha'}>
                <div>
                    <div>
                        <span style={{ fontSize: 18, fontWeight: "bold" }}>今日秒杀</span>
                        <span className={'daojishi'}>
                            <span >{daojishi[0]}</span> :
                            <span >{daojishi[1]}</span> :
                            <span >{daojishi[2]}</span>
                        </span>
                    </div>
                    <div>更多好货-> </div>
                </div>
                <ul>
                    {miaosha.map((item, index) => {
                        return <li className={'miaosha-Item'} key={item.item_id}>
                            <Link to={{pathname:'item',state:item}}>
                            <div className={'item-img'}><img src={item.image_url} alt={item.item_id} /></div>
                            <div className={'item-title'}>{item.item_short_name}</div>
                            <div className={'item-price'}>¥{item.promotion_price / 100}</div>
                            </Link>
                        </li>
                    })

                    }

                </ul>
            </div>
        </div>
    }
}

export default Miaosha;