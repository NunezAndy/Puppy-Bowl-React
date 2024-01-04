import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers } from "../API"
import PlayerListName from "./PlayerListName";
import NewPlayerForm from "./NewPlayerForm";

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useState("");
    console.log(searchParams);


useEffect(() => {
    async function getAllPlayers() {
        const APIResponse = await fetchAllPlayers();
        if (APIResponse.success) {
            setPlayers(APIResponse.data.players);
        } else {
            setError(APIResponse.error.message)
        }
    }
    getAllPlayers();
}, []);

const playersToDisplay = searchParams 
? players.filter((player) => 
   player.name.toLowerCase().includes(searchParams)
)
: players;

return (
    <>
        <div>
            <label>
                Search {" "}
                <input 
                type="text"
                placeholder="search"
                onChange={(e) => setSearchParams(e.target.value.toLowerCase())} 
                />
            </label>
        </div>
        <div>
            <NewPlayerForm />
        </div>
        {playersToDisplay.map((player) => {
            return (
                <>
                    <PlayerListName key={player.id} player={player}/>
                </>
            )
        })}
    </>
 )
}


export default AllPlayers