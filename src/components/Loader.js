import spinner from './spinner.gif'

import React from 'react'

const Loader = () => {
    return (
        <div className="loading">
            <img src={spinner} alt="Loading .."/>
        </div>
    )
}

export default Loader
