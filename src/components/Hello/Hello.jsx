// 创建外壳组件
import React, { Component } from 'react'

import './Hello.css'

// 创建并暴露App组件
class Hello extends Component{
    render() {
        return (
           <h2>Hello React!</h2>
        )
    }
}

export default Hello
