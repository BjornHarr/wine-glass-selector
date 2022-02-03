import SearchBar from './SearchBar';

import { useEffect, useState } from 'react';

const Search = (props) => {

    const { grapes, glassList, setGlassList, searchQuery, setSearchQuery } = props;

    const filterItems = (glassList) => {
        return glassList.filter((item) => {
            const itemName = item.name.toLowerCase();
            const query = searchQuery.toLowerCase();
            return itemName.includes(query);
        });
    };

    useEffect(() => {
        setGlassList(filterItems(glassList, searchQuery));
    }, [searchQuery]);

    return (
        <div>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
        </div>
    );
}

export default Search;