//路由配置,需要守卫的页面

import Cart from '../pages/cart'
import Center from '../pages/center'

export const routerConfig=[
    {
        path:'/center',
        component:Center,
        auth:true
    },
    {
        path:'/cart',
        component:Cart,
        auth:true
    }

]
