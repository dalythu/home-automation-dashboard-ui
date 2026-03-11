import { NavLink } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className="sidebar">
      <h2>Smart Home</h2>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/rooms">Rooms</NavLink>
      <NavLink to="/automations">Automations</NavLink>
    </div>
  )
}
