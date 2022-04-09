import { useParams } from "react-router-dom";
import React, { useState, useEffect }  from 'react';

// request to show a single character

function Details ()  { 
    const {id} = useParams()

    const [character, setCharacter] = useState([]);

    const initialUrl = `https://rickandmortyapi.com/api/character/${id}`

    const fetchCharacter = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCharacter(data))
            .then(error => console.log(error))
    }

    useEffect(() => {
        fetchCharacter(initialUrl)
    }, [])

return(
        <div className="container pt-5 " >
        <div className="card mb-3 shadow " >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={character.image} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">{character.name}</h2>
                        <ul>
                            <li>Status: {character.status}</li>
                            <li>Species: {character.species}</li>
                            <li>Gender: {character.gender}</li>
                        </ul>
                        <a href="/" className="btn btn-dark ">Back</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Details