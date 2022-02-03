import './List.css';

import ListItem from './ListItem/ListItem';


const List = (props) => {

    var keymaker = 0;

    return (
        <section>
        {
            props.items.map( (item) => (
                <ListItem name={item.name} key={'Glass-' + item.name + '-' + keymaker++} />
            ))
        }
        </section>
    );
}


//
//  TODO ------------------------------>
//  - Add one "SeriesList" for each of the wine glass series. e.g. one for Vinum, one for Veritas. 
//  - Remove entire SeriesList with filter
//  - Find specific glass in each SeriesList. If SeriesList is empty - remove it.

export default List;