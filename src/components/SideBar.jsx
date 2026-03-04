import Dashboard from "./Dashboard.jsx"
import Rooms from "./Rooms.jsx"
import CurrentRoom from "./CurrentRoom.jsx"
import Automations from "./Automations.jsx"
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