import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/rooms">Rooms</NavLink>
      <NavLink to="/automations">Automations</NavLink>
    </div>
  );
}