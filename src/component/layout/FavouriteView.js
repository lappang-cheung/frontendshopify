import React from 'react'

const FavouriteView = (props) => {
    const {index, result} = props

    return(
        <tr key={index}>
            <td>{result.full_name}</td>
            <td>{result.language}</td>
            <td>-</td>
            <td><a href="#">Remove</a></td>
        </tr>
    )
}

export default FavouriteView