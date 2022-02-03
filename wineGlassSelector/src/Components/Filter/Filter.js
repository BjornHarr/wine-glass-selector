import './Filter.css'

const Filter = (props) => {

    const {setGlassSeries} = props;

    return (
        <section className='filters'>
            <button onClick={() => setGlassSeries('Veritas')}> Veritas</button>
            <button onClick={() => setGlassSeries('Vinum')}> Vinum</button>
        </section>
    );
}

export default Filter;
            