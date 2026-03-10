import './App.css'
import SideBar from './components/SideBar.jsx'
import MainContent from './components/MainContent.jsx'
import { useState, useEffect } from 'react'
//import { rooms as initialRooms } from './data/rooms'

export default function App() {
  const [roomsState, setRoomsState] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await fetch("http://localhost:5001/api/rooms");
        const data = await response.json();
        setRoomsState(data);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      }
    }

    fetchRooms();
  }, []);

  return (
    <div className="app-layout">
      <SideBar />
      <MainContent rooms={roomsState} />
    </div>
  )
}
