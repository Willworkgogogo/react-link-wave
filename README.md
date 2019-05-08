![GitHub stars](https://img.shields.io/github/stars/Willworkgogogo/react-link-wave.svg?style=social)
![npm](https://img.shields.io/npm/v/react-link-wave.svg)
![Cocoapods](https://img.shields.io/cocoapods/l/m.svg)

这是一个针对a链接的移入产生水波纹效果的react组件，[在线DEMO](https://willworkgogogo.github.io/react-link-wave/)

## Use

`下载`

```shell
npm i react-link-wave
```

`在react组件中引用`

```shell
import React from 'react'
import LinkWave from 'react-link-wave'

class App extends React.PureComponent {
    render() {
        return (
            <div>
                <LinkWave href="http://www.baidu.com" text="请把鼠标移入试试" color="#000" />
            </div>
        )
    }
}
```

## Params

参数名 | 必填 | 默认值 | 说明
---------|----------|---------| ---
 color | 否 | #0000EE | 必须是#开头颜色值，用于设置a标签文字和波纹的颜色
 href | 否 | "" | a链接跳转地址
 text | 是 | ""| 用于显示的文字
 style | 否 | - | 设置样式，如果内部有color属性，则优先级高于上面设置的color属性。
