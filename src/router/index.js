import React from 'react';
import {BrowserRouter,  Route, Switch } from 'react-router-dom'
import HeadTitle from '../common/headtitle'

//导入页面
import Main from '../pages/main'
import Good from '../pages/goods'
import Global from '../pages/global'
import Mask from '../pages/mask'
import Item from '../pages//Item';

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
            </Switch>
        </div>
    </BrowserRouter>
)

export default App;