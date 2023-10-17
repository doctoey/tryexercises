import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(response => {
      setPokemon(response.data)
    })
  }, [])
  console.log(pokemon, '==data==')
  console.log(pokemon?.forms, '==forms==')
  console.log(pokemon?.species, '===species===')
  console.log(pokemon?.species.name, '===species name===')
  return (
    <>
      <div>
        {pokemon?.forms.map(data => (
          <div>{data.name}</div>
        ))}
      </div>
    </>
  )
}

