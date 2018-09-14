import React, { Fragment } from 'react'

import FavouriteView from './FavouriteView'

const FavouriteList = (props) => {

    const { favList } = props

    return(
        <Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Language</th>
                        <th scope="col">Latest Tag</th>
                    </tr>
                </thead>
                <tbody>
                {
                    favList.map((result, index) => 
                        <FavouriteView 
                            key={index}
                            index={index}
                            result={result}
                        />
                    )
                }
                </tbody>
            </table>
        </Fragment>
    )
}

export default FavouriteList