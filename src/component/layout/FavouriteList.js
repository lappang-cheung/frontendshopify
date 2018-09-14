import React, { Fragment } from 'react'

import FavouriteView from './FavouriteView'

const FavouriteList = () => {
    return(
        <Fragment>
            <p>Favourite List</p>
            <ul>
                <FavouriteView />
            </ul>
        </Fragment>
    )
}

export default FavouriteList