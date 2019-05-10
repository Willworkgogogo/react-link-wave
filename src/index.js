import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './index.css'

function LinkWave({ href, color, text, ...rest }) {
    const [visible, setVisible] = useState(false)
    const calWaveColor = () => {
        let origin = color
        if ('style' in rest && 'color' in rest.style) {
            origin = rest.style.color
        }
        return origin.replace('#', '%23')
    }
    const background = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cpath fill='none' stroke='${calWaveColor()}' d='M0 3.5c5 0 5-3 10-3s5 3 10 3 5-3 10-3 5 3 10 3'/%3E%3C/svg%3E") repeat-x 0 100%`
    const styles = {
        background,
        textDecoration: 'none',
        backgroundSize: '20px auto',
        animation: 'waveMove 1s infinite linear'
    }

    const { style, ...otherProp } = rest
    const combinedStyles = (() => {
        if (visible) return styles
        return null
    })()
    const moveover = () => setVisible(true)
    const moveleave = () => setVisible(false)
    console.log(Object.assign({}, style, combinedStyles))
    return (
        <a
            {...otherProp}
            onMouseOver={moveover}
            onMouseLeave={moveleave}
            href={href}
            style={Object.assign({}, style, combinedStyles)}
        >
            {text}
        </a>
    )
}

LinkWave.porpTypes = {
    href: PropTypes.string.isRequired,
    color: PropTypes.string,
    text: PropTypes.element.isRequired
}

LinkWave.defaultProps = {
    href: '',
    color: '#0000EE'
}

export default LinkWave
