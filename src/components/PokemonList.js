
// function that returns a list of objects/pokemon using map() to iterate
const PokemonList = ({ pokemon }) => {
    return (
        <ul>
            {pokemon.map((pokemonObject, index) => {
            return (
                <li key={index}>
                    {pokemonObject.name}
                </li>
                );
            })};
        </ul>
    );
};
export default PokemonList;