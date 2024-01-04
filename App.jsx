import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import PlayerListName from './components/PlayerListName'

function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null)

  return (
    <>
      <h1>Puppy Bowl</h1>
      <Routes>
        <Route path="/" element={<AllPlayers />}/>
        <Route path="/:id" element={<SinglePlayer />}/>
      </Routes>
    </>
  )
}

export default App
