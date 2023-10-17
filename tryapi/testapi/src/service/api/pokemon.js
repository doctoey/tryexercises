import React, { useEffect, useState } from 'react'
import axios from "axios";

function pokemon() {

const [pokemon, setPokemon] = useState([])
    useEffect(()=>{
        const getData = async () => {
            try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
            const pokemon = response.data
            setPokemon(pokemon)
            } catch (error){
                console.log(error)
            }
        }
        getData()
    }, [])

}

export default pokemon