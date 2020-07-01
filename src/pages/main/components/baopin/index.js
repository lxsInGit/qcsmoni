import React, { Component } from 'react';
import './index.scss'


class Baopin extends Component {
    render() {
        const {baopinlist } = this.props
       // console.log(baopinlist)
        return <div>
           {baopinlist.map((item,index)=>{
               return <div key={index}>{item.item_name}</div>
           })}
        </div>
    }
}

export default Baopin;