import React from 'react';

const SearchPannel = () => {
    const searchText = 'Type here to search';
    return (
        <input className="form-control"       
            placeholder={searchText} />
    )
}

export default SearchPannel;