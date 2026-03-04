import Dashboard from "../pages/Dashboard.jsx"
import Rooms from "../pages/Rooms.jsx"
import CurrentRoom from "../pages/CurrentRoom.jsx"
import Automations from "../pages/Automations.jsx"
import { NavLink } from "react-router-dom"

export default function SideBar() {
  return (
    <div>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/rooms">Rooms</NavLink>
      <NavLink to="/automations">Automations</NavLink>
    </div>
  );
}