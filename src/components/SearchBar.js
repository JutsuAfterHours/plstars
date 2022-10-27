import React from "react";

const SearchBar = ({searchChange}) => {
    return (
        <div className='tc-l pv4'>
            <input 
                className='pa2 br3' 
                type='search' 
                placeholder='Find Your Star' 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBar;