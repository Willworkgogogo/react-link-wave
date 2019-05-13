import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import LinkWave from '../src'
import { TwitterPicker } from 'react-color'

const DefaultColor = 'EB144C'

const App = () => {
    const [color, setColor] = useState(DefaultColor)

    function changeColor(color) {
        setColor(color.hex)
    }

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <div>
                    <LinkWave
                        text="Please move over me, you'll see the wave"
                        href="javascript:;"
                        style={{ color, fontSize: 20 }}
                        target="_blank"
                    />
                </div>
                <div style={{ marginTop: 10, display: 'inline-block' }}>
                    <TwitterPicker
                        color={color}
                        onChangeComplete={changeColor}
                    />
                </div>
            </div>
            <div style={{ marginTop: 30 }}>
                <pre>
                    <code className="javascript">
                        {`
    import React, {useState} from 'react'
    import ReactDOM from 'react-dom'
    import LinkWave from '../src'
    import { TwitterPicker } from 'react-color'

    const DefaultColor = '#000000'

    const App = () => {
        const [color, setColor] = useState(DefaultColor)

        function changeColor(e) {
            setColor(color.hex)
        }

        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <div>
                        <LinkWave
                            text="Please move over me, you'll see the wave"
                            href="javascript:;"
                            style={{ color, fontSize: 20 }}
                            target="_blank"
                        />
                    </div>
                    <div style={{ marginTop: 10, display: 'inline-block' }}>
                        <TwitterPicker
                            color={color}
                            onChangeComplete={changeColor}
                        />
                    </div>
                </div>
            </div>
        )
    }

    ReactDOM.render(<App />, document.getElementById('root'))
                    `}
                    </code>
                </pre>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
