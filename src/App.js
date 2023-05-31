// required imports from other components
import axios from 'axios';
import React, {useState} from 'react';
import PokemonList from './components/PokemonList';
import Button from './components/Button';
import './App.css';

const App = () => {
  // useState to set variables for pokemon and api pokemon list
  const [pokemon , setPokemon] = useState([]);
  const [listLoaded, setListLoaded] = useState(false);
  
  // function to fetch api list using axios.get 
  const fetchList = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response) => {
    setPokemon(response.data.results)
    // sets the list to true so it can be render
    setListLoaded(true);
  });
}
  return (
    <div className='App container justify-items-center'>
      <h1>All Pokemon</h1>
        <div className='col-3'>
          <Button onClick={fetchList}/>
          {listLoaded && <PokemonList pokemon={pokemon}/>}
        </div>
    </div>
  );
};

export default App;
