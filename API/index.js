const COHORT = "2306-ftb-et-web-am"
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`

export async function fetchAllPlayers() {
    try {
        const response = await fetch(`${API_URL}/players`);
        const result = await response.json();       
        return result;
    } catch (error) {
        console.error(error)
    }
}

export async function fetchSinglePlayer(playerId) {
    try {
        const response = await fetch(`${API_URL}/players/${playerId}`)
        const result = await response.json();
        return result
    } catch (error) {
        console.error(`Trouble fetching player ${playerId}`)
    }
}