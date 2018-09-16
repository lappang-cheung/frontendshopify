import React, { Fragment } from 'react'

import FavouriteView from './FavouriteView'

const FavouriteList = (props) => {

    const { favList, onRemove } = props

    return(
        <Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Latest Tag</th>
                    </tr>
                </thead>
                <tbody>
                {
                    favList.map((result, index) => 
                        <FavouriteView 
                            key = {index}
                            index = {index}
                            result = {result}
                            onRemove = {onRemove}
                        />
                    )
                }
                </tbody>
            </table>
        </Fragment>
    )
}

export default FavouriteList