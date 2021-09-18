import './App.css';
import { useState } from 'react';

const App = () => {

    const [pokemonName, setPokemonName] = useState("");


    return (
        <div className="App">
            <div className="TitleSection">
            <h1>Pokemon Stats</h1>
            <input 
            type="text"
            onChange={(event) => {
                setPokemonName(event.target.value);
            }}/>
            <button>Seach Pokemon</button>
            </div>
        </div>
    )
}

export default App;