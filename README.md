![GitHub stars](https://img.shields.io/github/stars/Willworkgogogo/react-link-wave.svg?style=social)
![npm](https://img.shields.io/npm/v/react-link-wave.svg)
![Cocoapods](https://img.shields.io/cocoapods/l/m.svg)

This is a React component for a tag to get a hover wave transition. [DEMO](https://willworkgogogo.github.io/react-link-wave/)

## Start

`download`

```shell
npm i react-link-wave
```

`use in react`

```shell
import React from 'react'
import LinkWave from 'react-link-wave'

class App extends React.PureComponent {
    render() {
        return (
            <div>
                <LinkWave href="http://www.baidu.com" text="Please move over me, you'll see the wave" color="#000" />
            </div>
        )
    }
}
```

## Params

params | required | default | explain
---------|----------|---------| ---
 color | N | #0000EE | set the a tag and wave color, the value's format must like `#xxxxxx` or `#xxx`
 href | N | "" | just set a link
 text | Y | ""| set the show text
 otherProps | N | - | link `style`、`ref`, if you set the style, the priority is higher than the `color prop`
