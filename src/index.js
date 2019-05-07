import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './index.css'

function LinkWave({ href, color, children, ...rest }) {
    const [visible, setVisible] = useState(false)
    const background = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cpath fill='none' stroke='${color.replace(
        '#',
        '%23'
    )}' d='M0 3.5c5 0 5-3 10-3s5 3 10 3 5-3 10-3 5 3 10 3'/%3E%3C/svg%3E") repeat-x 0 100%`
    const styles = {
        background,
        textDecoration: 'none',
        backgroundSize: '20px auto',
        animation: 'waveMove 1s infinite linear'
    }

    const combinedStyles = (() => {
        if (visible) return styles
        return null
    })()
    const moveover = () => setVisible(true)
    const moveleave = () => setVisible(false)

    return (
        <a
            onMouseOver={moveover}
            onMouseLeave={moveleave}
            href={href}
            style={Object.assign({}, combinedStyles, rest.style)}
        >
            {children}
        </a>
    )
}

LinkWave.porpTypes = {
    href: PropTypes.string.isRequired,
    color: PropTypes.string,
    children: PropTypes.element.isRequired
}

LinkWave.defaultProps = {
    href: '',
    color: '#007fff'
}

export default LinkWave
