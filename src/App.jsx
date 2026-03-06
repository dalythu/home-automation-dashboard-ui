import "./App.css";
import SideBar from "./components/SideBar.jsx";
import MainContent from "./components/MainContent.jsx";
import { useState } from "react";
import { rooms as initialRooms } from "./data/rooms";

export default function App() {
  const [roomsState, setRoomsState] = useState(initialRooms);

  function toggleLight(roomId, lightId) {
    setRoomsState((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId
          ? {
              ...room,
              lights: room.lights.map((light) =>
                light.id === lightId
                  ? { ...light, on: !light.on }
                  : light
              ),
            }
          : room
      )
    );
  }

  return (
    <div className="app-layout">
      <SideBar />
      <MainContent rooms={roomsState} toggleLight={toggleLight} />
    </div>
  );
}