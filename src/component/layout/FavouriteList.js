// Require components
import React from 'react'
// Custom component
import FavouriteView from './FavouriteView'

/**
 * @COMP - FavouriteList component
 * @DESC - Render a list of views for each individual repo from user
 */
const FavouriteList = props => {
    // Destructing from the props
    const { favList, onRemove } = props
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
    )
}
// Export the component
export default FavouriteList