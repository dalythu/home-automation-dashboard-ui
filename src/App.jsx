import './App.css'
import SideBar from './components/SideBar.jsx'
import MainContent from './components/MainContent.jsx'
import { useEffect, useState } from 'react'

export default function App() {
  const [roomsState, setRoomsState] = useState([])

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await fetch('http://localhost:5001/api/rooms')
        const data = await response.json()
        setRoomsState(data)
      } catch (error) {
        console.error('Failed to fetch rooms:', error)
      }
    }

    fetchRooms()
  }, [])

  async function toggleLight(roomId, lightId, currentOn) {
    try {
      const response = await fetch(
        `http://localhost:5001/api/rooms/${roomId}/lights/${lightId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ on: !currentOn }),
        },
      )

      const updatedRoom = await response.json()

      setRoomsState((prevRooms) =>
        prevRooms.map((room) =>
          room.id === updatedRoom.id ? updatedRoom : room,
        ),
      )
    } catch (error) {
      console.error('Failed to toggle light:', error)
    }
  }

  async function removeLight(roomId, lightId) {
    try {
      const response = await fetch(
        `http://localhost:5001/api/rooms/${roomId}/lights/${lightId}`,
        {
          method: 'DELETE',
        },
      )

      const updatedRoom = await response.json()

      setRoomsState((prevRooms) =>
        prevRooms.map((room) =>
          room.id === updatedRoom.id ? updatedRoom : room,
        ),
      )
    } catch (error) {
      console.error('Failed to remove light:', error)
    }
  }

  async function addLight(roomId, lightName) {
    try {
      const response = await fetch(
        `http://localhost:5001/api/rooms/${roomId}/lights`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: lightName }),
        },
      )

      const updatedRoom = await response.json()

      setRoomsState((prevRooms) =>
        prevRooms.map((room) =>
          room.id === updatedRoom.id ? updatedRoom : room,
        ),
      )
    } catch (error) {
      console.error('Failed to add light:', error)
    }
  }

  return (
    <div className="app-layout">
      <SideBar />
      <MainContent
        rooms={roomsState}
        toggleLight={toggleLight}
        removeLight={removeLight}
        addLight={addLight}
      />
    </div>
  )
}
