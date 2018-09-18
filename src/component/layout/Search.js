// Required components
import React from 'react'

import { MyContext } from '../contextApi/MyProvider'

/**
 * @COMP - Search Component
 * @DESC - Contains the seach input and button for submission
 */
const Search = () => {

    // Render the form with input and button
    return(
        <MyContext.Consumer>
            {(context) => (
                <form className="searchField">
                    <input 
                        type="search" 
                        name="search" 
                        id="search"
                        value={context.state.search}
                        onChange={context.onChange}
                    />
                    <button className="searchBtn" onClick={context.onSearch}>Search</button>
                </form>
            )}
        </MyContext.Consumer>
    )
}

// Export the component
export default Search