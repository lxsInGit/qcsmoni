import React, { Component } from 'react';
import { Input  } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink, Link,withRouter } from 'react-router-dom';
import './index.scss';

const { Search } = Input;

class HeadTitle extends Component {
   
    render() {
        //console.log(this.props) //获取路由的props必须加上路由的稿件组件withRouter
        const pathname= this.props.location.pathname
        return <div>
         { pathname==='/'||pathname==='/global'||pathname==='/mask'||pathname==='/goods'?(
             <div className={"qcs-header"}>
              
             <div className={"qcs-h-search"}>
                     <div> <Link to="/center"><UserOutlined className={"user"}/></Link></div>
                     <div>
                         <Search
                             className={"search"}
                             placeholder="输入面膜"
                             onSearch={value => console.log(value)}
                             style={{ width: 200 }}
                         />
                     </div>
                     <div><Link to="/cart"><ShoppingCartOutlined className={"shop"}/></Link></div>
  
             </div>

             <div className={"qcs-h-nav"}>
                 <ul>
                     <li>
                         <NavLink exact={true} to={"/"} activeClassName={"active"}>今日推荐</NavLink>
                     </li>
                     <li>
                         <NavLink to={"/mask"}>面膜中心</NavLink>
                     </li>
                     <li>
                         <NavLink to={"/goods"}>潮流好物</NavLink>
                     </li>
                     <li>
                         <NavLink to={"/global"}>购全球</NavLink>
                     </li>

                 </ul>
             </div>
         </div>
         ):pathname==='/item'||pathname==='/list'?(
            <div className={"header-img"}>
            <img src={"https://image.watsons.com.cn//upload/f573b66d.jpg"} alt={"头部广告图"} />

        </div>  
         ):''}
        </div>
    }
}

export default withRouter(HeadTitle);