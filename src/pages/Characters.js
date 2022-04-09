import React, { useState, useEffect }  from 'react';
import Card_character from '../components/Card_characters';

function Characters (){

const [characters, setCharacters] =useState([]);

const initialUrl = "https://rickandmortyapi.com/api/character"

const fetchCharacters = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => setCharacters(data.results))
        .then(error => console.log(error))
}

useEffect(() => {
    fetchCharacters(initialUrl)
}, [])

return (

    <div className='container'>
        <Card_character characters={characters} />
    </div>
)
}

export default Characters;