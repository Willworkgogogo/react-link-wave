import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './index.css'

const DEFAULT_COLOR = '#0000EE'

function LinkWave({ href, color, text, ...rest }) {
    const [visible, setVisible] = useState(false)

    const calWaveColor = () => {
        let origin = color
        if ('style' in rest && 'color' in rest.style) {
            origin = formatColor(rest.style.color)
        }
        return origin.replace('#', '%23')
    }

    const formatColor = colorHex => {
        if (typeof colorHex === 'string' && colorHex) {
            if (colorHex.indexOf('#') === 0 && colorHex.length > 4) {
                return colorHex
            } else {
                return `#${colorHex}`
            }
        } else {
            console.error(
                'the color you set is non-compliant, it should like #0000EE'
            )
        }
        return DEFAULT_COLOR
    }

    const background = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cpath fill='none' stroke='${calWaveColor()}' d='M0 3.5c5 0 5-3 10-3s5 3 10 3 5-3 10-3 5 3 10 3'/%3E%3C/svg%3E") repeat-x 0 100%`

    const styles = {
        background,
        textDecoration: 'none',
        backgroundSize: '20px auto',
        animation: 'waveMove 1s infinite linear'
    }

    let { style, ...otherProp } = rest

    const dealColor = style => {
        let cacheStyle = Object.assign({}, style)
        if (style === undefined && !color) {
            cacheStyle.color = DEFAULT_COLOR
        }
        if (style && style.color) {
            cacheStyle.color = formatColor(style.color)
        } else if (color) {
            cacheStyle.color = formatColor(color)
        }
        return cacheStyle
    }

    style = dealColor(style)

    const combinedStyles = (() => {
        if (visible) return styles
        return null
    })()

    const moveover = () => setVisible(true)

    const moveleave = () => setVisible(false)

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
    color: DEFAULT_COLOR
}

export default LinkWave
