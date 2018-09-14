import React from  'react'

const ReactView = (props) => {

    const {index, result, onAdd } = props

    return(
        <tr key={index}>
            <td>{result.full_name}</td>
            <td>{result.language}</td>
            <td>-</td>
            <td><a href="#" onClick={() => onAdd(result)}>Add</a></td>
        </tr>
    )
}

export default ReactView