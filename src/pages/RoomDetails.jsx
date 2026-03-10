import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import LightCard from '../components/LightCard'

export default function RoomDetails({
  rooms,
  toggleLight,
  removeLight,
  addLight,
}) {
  const { roomId } = useParams()
  const [newLightName, setNewLightName] = useState('')

  const room = rooms.find((r) => r.id === roomId)

  if (!room) {
    return <h1>Room not found</h1>
  }

  function handleAddLight(e) {
    e.preventDefault()

    if (!newLightName.trim()) return

    addLight(room.id, newLightName)
    setNewLightName('')
  }

  return (
    <div>
      <h1>{room.name}</h1>

      <p>Occupied: {room.occupied ? 'Yes' : 'No'}</p>

      <h2>Lights</h2>

      <form onSubmit={handleAddLight}>
        <input
          type="text"
          placeholder="Add a light"
          value={newLightName}
          onChange={(e) => setNewLightName(e.target.value)}
        />
        <button type="submit">Add Light</button>
      </form>

      {room.lights.length === 0 ? (
        <p>No lights in this room</p>
      ) : (
        room.lights.map((light) => (
          <LightCard
            key={light.id}
            light={light}
            roomId={room.id}
            toggleLight={toggleLight}
            removeLight={removeLight}
          />
        ))
      )}

      <Link to="/rooms">Back to Rooms</Link>
    </div>
  )
}
