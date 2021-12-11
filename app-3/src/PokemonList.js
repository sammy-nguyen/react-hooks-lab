import React from 'react';
import { useState } from 'react';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function PokemonList(props){
  const [list, setList] = useState([])

  useEffect(() =>{
    axios
    .get('https://pokeapi.co/api/v2/pokemon').then((res) => {
      setList(res.data.results)
    })
  }, [])

  return(
    <span>
      {list.map((pokemon) => {
        return (
          <Link key={pokemon.url} to={`/pokemon/${pokemon.name}`}>
            <p>{pokemon.name}</p>
          </Link>
        )})}
    </span>
  )
  }

export default PokemonList
