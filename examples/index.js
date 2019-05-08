import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import LinkWave from '../src'

const DefaultColor = '#000000'

const App = () => {
    const [color, setColor] = useState(DefaultColor)

    function changeColor(e) {
        setColor(e.target.value)
		console.log("当前选择颜色:", e.target.value)
    }

    return (
        <div>
            <LinkWave text="请把鼠标移入查看效果" href="javascript:;" style={{color}}></LinkWave>
            <input type="color" onChange={changeColor} style={{marginLeft: 20}} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))