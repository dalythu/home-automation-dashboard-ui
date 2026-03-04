import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Rooms from "../pages/Rooms";
import Automations from "../pages/Automations";
import CurrentRoom from "../pages/CurrentRoom";

export default function MainContent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/automations" element={<Automations />} />

      <Route path="/room/:roomId" element={<CurrentRoom />} />
    </Routes>
  );
}