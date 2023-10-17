import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
      setPokemon(response.data);
    });
    // const pokemon = response.data;
  }, []);
  console.log(pokemon, "=====pokemon====");
  // console.log(pokemon.forms, "pokemon.form====");
  // console.log(pokemon.id, "pokemon.id");
  // console.log(pokemon.game_indices, "pokemon");
  return (
    <>
      {pokemon?.forms.map((data)=>{

        <div>
          {data.name}
        </div>
      })}
      123
    </>
  );
}

export default App;
