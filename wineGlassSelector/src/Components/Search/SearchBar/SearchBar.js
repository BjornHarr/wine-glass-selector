import './SearchBar.css'

const SearchBar = (props) => {
    const { searchQuery, setSearchQuery } = props;

    return (
        <form
            action="/"
            method="get"
            autoComplete="off"
        >
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Search"
            />
        </form>
    );
}

export default SearchBar;