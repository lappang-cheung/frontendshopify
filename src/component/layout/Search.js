import React from 'react'

const Search = (props) => {

    const { search, onChange, onSearch} = props

    return(
        <form>
            <input 
                type="search" 
                name="search" 
                id="search"
                value={search}
                onChange={onChange}
            />
            <button onClick={onSearch}>Search</button>
        </form>
    )
}

export default Search