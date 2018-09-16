import React from 'react'

const Search = (props) => {

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
            <button className="searchButton" onClick={onSearch}>Search</button>
        </form>
    )
}

export default Search