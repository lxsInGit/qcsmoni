import React,{Component} from 'react';
import { LeftOutlined} from '@ant-design/icons';
import './index.scss'

class Item extends Component{
    goback=()=>{
        this.props.history.go(-1)
    }
    render(){
        console.log(this.props)
        const itemData = this.props.location.state
        return <div>
          <div className={'qcs-item-head'}>
                 <LeftOutlined  className={'item-back'} onClick={this.goback}/>
                <div>
                 {itemData.item_short_name.split(' ')[0]}
                 </div>
             </div>
            <div className={'qcs-item-content'}>
              <img src={itemData.image_url} alt={'item图片'}/>
            </div>
        </div>
    }
}

export default Item;