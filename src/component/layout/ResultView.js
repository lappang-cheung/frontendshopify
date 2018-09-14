import React from  'react'

const ReactView = (props) => {

    const {index, result, onAdd } = props

    return(
        <tr key={index}>
            <td><a href={result.html_url}>{result.full_name}</a></td>
            <td>{result.language}</td>
            <td> - </td>
            <td><a href="#" onClick={() => onAdd(result)}>Add</a></td>
        </tr>
    )
}

export default ReactView