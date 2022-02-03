import './App.css';

import grapes from './Data/Grapes.json';
import glassesSeries from './Data/WineGlasses.json';

import { useState, useEffect } from 'react';

import List from './Components/List/List';
import Search from './Components/Search/Search';
import Filter from './Components/Filter/Filter';

function App() {

    const [glassSeries, setGlassSeries] = useState('Vinum');
    const [glassList, setGlassList] = useState([]);

    useEffect(() => {
        console.log("setNewGlassSeries");
        glassesSeries.map((series) => {
            if (glassSeries === series.name){
                setGlassList(series.glasses);
            }
        })
    },[glassSeries]);
    

    return (
        <main>
            <Search grapes={grapes} glassList={glassList} setGlassList={setGlassList} />
            <Filter setGlassSeries={setGlassSeries} />
            <List items={ glassList }/>
        </main>
    );
}

export default App;
