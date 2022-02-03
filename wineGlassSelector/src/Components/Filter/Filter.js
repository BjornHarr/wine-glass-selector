import './Filter.css'

const Filter = (props) => {

    const {setGlassSeries,setSearchQuery} = props;

    function updateGlassSeries(glassSeries){
        setGlassSeries(glassSeries)
        setSearchQuery('');
    }

    return (
        <section className='filters'>
            <button onClick={() => updateGlassSeries('Veritas')}> Veritas</button>
            <button onClick={() => updateGlassSeries('Vinum')}> Vinum</button>
        </section>
    );
}

export default Filter;
            