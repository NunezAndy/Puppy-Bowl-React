import { useState } from "react";
import { fetchAllPlayers } from "../API";

const COHORT = "2306-ftb-et-web-am"
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`

const NewPlayerForm = () => {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [error, setError] = useState(null);

async function handleSubmit(e) {
    e.preventDefault();
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({name, breed}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        fetchAllPlayers()
    } catch (error) {
        setError(error.message)
    }
}

    return ( 
        <>
            <h3 className="new-player">New Player</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    Breed: <input value={breed} onChange={(e) => setBreed(e.target.value)}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
 
export default NewPlayerForm;