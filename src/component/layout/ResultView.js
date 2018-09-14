import React from  'react'

const ReactView = (props) => {

    const {index, result } = props

    return(
        <li key={index}>
            {result.name}
        </li>
    )
}

export default ReactView