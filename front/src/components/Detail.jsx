import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail(){
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    // console.log(character);
    const API_KEY = 'henrystaff'

    useEffect(()=>{
        axios( `https://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`)
        .then(({ data })=>{
            if(data.name) setCharacter(data)
            else return alert('No hay personajes con ese ID')
        })
        return setCharacter({})
    },[id])

    return <div>
        {
            character ? (
                <div>
                    <h2>Id: {character.id}</h2>
                    <h2>Name: {character.name}</h2>
                    <h4>Status: {character.status}
                    </h4>
                    <h4>Species: {character.species}</h4>
                    <h4>Gender: {character.gender}</h4>
                    <h4>Origin: {character.origin?.name}</h4>
                    <h4>Type: {character.type}</h4>
                    <img src={character.image} alt={character.name} />
                </div>
            ) : ''
        }
    </div>
}

export default Detail;