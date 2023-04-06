 import axios from "axios"
 import { useParams } from "react-router-dom"
 import { useState, useEffect } from "react"

 const URL_BASE = "https://be-a-rym.up.railway.app/api/character"
const API_KEY = "f71fb6126dfc.6c5e2dd0e20891515c25"
 

 const Ditail = () =>{
    const {id} = useParams()
    const [character, setCharacter] = useState({

    })

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(
        <div>
            <h2>{character?.na}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <h2>{character?.image}</h2>

        </div>
    )
 }

 export default Ditail