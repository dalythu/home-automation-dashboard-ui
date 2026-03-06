import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Rooms from "../pages/Rooms";
import Automations from "../pages/Automations";
import RoomDetails from "../pages/RoomDetails";

export default function MainContent({ rooms, toggleLight }) {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/rooms" element={<Rooms rooms={rooms} />} />
      <Route path="/automations" element={<Automations />} />
      <Route
        path="/rooms/:roomId"
        element={<RoomDetails rooms={rooms} toggleLight={toggleLight} />}
      />
    </Routes>
  );
}