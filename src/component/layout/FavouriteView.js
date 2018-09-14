import React from 'react'

const FavouriteView = (props) => {
    const {index, result, onRemove} = props

    return(
        <tr key={index}>
            <td>{result.full_name}</td>
            <td>{result.language}</td>
            <td>-</td>
            <td><a href="#" onClick={() => onRemove(result)}>Remove</a></td>
        </tr>
    )
}

export default FavouriteView