import './App.css'
import SideBar from './components/SideBar.jsx'
import MainContent from './components/MainContent.jsx'
import { useState } from "react";
import { rooms as initialRooms } from "./data/rooms";

export default function App() {
  const [roomsState, setRoomsState] = useState(initialRooms)

  function toggleLights(roomId) {
    setRoomsState((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId ? { ...room, lightsOn: !room.lightsOn } : room
      )
    );
  }

  return (
    <div className="app-layout">
      <SideBar /> 
      <MainContent rooms={roomsState} toggleLights={toggleLights} />
    </div>
  )
}