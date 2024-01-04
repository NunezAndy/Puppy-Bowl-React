import { useNavigate } from "react-router-dom"

const PlayerListName = ({player}) => {
    const navigate = useNavigate();    

    return (
        <>
            <h2>{player.name}</h2>
            <button onClick={() => navigate(`/${player.id}`)} player={player}>See Details</button>
        </>
    )
}

export default PlayerListName