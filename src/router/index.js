import React from 'react';
import {BrowserRouter,  Route, Switch } from 'react-router-dom'
import HeadTitle from '../common/headtitle'

//导入页面
import Main from '../pages/main';
import Good from '../pages/goods';
import Global from '../pages/global';
import Mask from '../pages/mask';
import Item from '../pages/Item';
import Cart from '../pages/cart';
import List from '../pages/list';
import Login from '../pages/login';
import Center from '../pages/center';

const App = () => (
    <BrowserRouter>
        {/* 1.配置跳转路径 */}
        <HeadTitle />
        {/* 2.配置路由表 */}
        <div>
            <Switch>
            <Route  path={"/"} exact={true} component={Main}/>
            <Route path={'/goods'} exact={true}  component={Good}></Route>
            <Route path={'/mask'} exact={true}  component={Mask}></Route>
            <Route path={'/global'} exact={true}  component={Global}></Route>
            <Route path={'/item'} exact={true}  component={Item}></Route>
            <Route path={'/cart'} exact={true}  component={Cart}></Route>
            <Route path={'/list'} exact={true}  component={List}></Route>
            <Route path={'/login'} exact={true}  component={Login}></Route>
            <Route path={'/center'} exact={true}  component={Center}></Route>
            </Switch>
        </div>
    </BrowserRouter>
)

export default App;