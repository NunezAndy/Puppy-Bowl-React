import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../API";


const SinglePlayer = () => {
    const [player, setPlayer] = useState(null);
    const [error, setError] = useState(null);

    const {id} = useParams();
    

    useEffect(() => {
        async function getSinglePlayer() {
            const response = await fetchSinglePlayer(id);
            if (response.success) {
                setPlayer(response.data.player);
            } else {
                setError(response.error.message);
                console.error(error);
            }
        }
        getSinglePlayer();
    }, [])
    
    

    return (
        <>
            <h2>Name: {player && player.name}</h2>
            <h3>Breed: {player && player.breed}</h3>
            <img src={player && player.imageUrl} alt="The picture" />
        </>
    )
} 

export default SinglePlayer;