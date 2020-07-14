//我们需要将 获取缓存的这部分程序进行封装，即为高阶组件
//高阶组件（HOC）是 React 中用于重用组件逻辑的高级技术。 HOC 本身不是 React API 的一部分。 它们是从 React 构思本质中浮现出来的一种模式。
// 具体来说，高阶组件是一个函数，能够接受一个组件并返回一个新的组件。
import React,{Component} from 'react';

const withGoBack = WrappedComponent =>{
    return class extends Component{
        goback = () => {
            this.props.history.go(-1)
        }
        render(){
            return <WrappedComponent  goBack={this.goback} {...this.props} />
        }
    }
}

export  default withGoBack;