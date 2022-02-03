import './App.css';

import grapes from './Data/Grapes.json';
import glassesSeries from './Data/WineGlasses.json';

import { useState, useEffect } from 'react';

import List from './Components/List/List';
import Search from './Components/Search/Search';
import Filter from './Components/Filter/Filter';

function App() {

    const [searchQuery, setSearchQuery] = useState('');
    const [glassSeries, setGlassSeries] = useState('Vinum');
    const [glassList, setGlassList] = useState([]);
    const [fullGlassList, setFullGlassList] = useState([]);

    useEffect(() => {
        glassesSeries.map((series) => {
            if (glassSeries === series.name){
                setGlassList(series.glasses);
                setFullGlassList(series.glasses);
            }
        })
    },[glassSeries]);


    return (
        <main>
            <Search grapes={grapes} glassList={fullGlassList} setGlassList={setGlassList} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <Filter setGlassSeries={setGlassSeries} setSearchQuery={setSearchQuery} />
            <List items={ glassList }/>
        </main>
    );
}

export default App;
