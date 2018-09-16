// Required components
import React from 'react'

/**
 * @COMP - Search Component
 * @DESC - Contains the seach input and button for submission
 */
const Search = (props) => {

    // Destructing from props
    const { search, onChange, onSearch} = props

    return(
        <form className="searchField">
            <input 
                type="search" 
                name="search" 
                id="search"
                value={search}
                onChange={onChange}
            />
            <button className="searchBtn" onClick={onSearch}>Search</button>
        </form>
    )
}

// Export the component
export default Search