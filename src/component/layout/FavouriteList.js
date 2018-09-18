// Require components
import React from 'react'
// Custom component
import FavouriteView from './FavouriteView'

/**
 * @COMP - FavouriteList component
 * @DESC - Render a list of views for each individual repo from user
 */
const FavouriteList = props => {
    
    // Table element and iterate through the FavList
    return(
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
                <FavouriteView />
            }
            </tbody>
        </table>
    )
}
// Export the component
export default FavouriteList