import Dashboard from "./Dashboard.jsx"
import Rooms from "./Rooms.jsx"
import CurrentRoom from "./CurrentRoom.jsx"
import Automations from "./Automations.jsx"

export default function Sidebar() {
  return (
    <nav>
      <ul>
        <li><button>Dashboard</button></li>
        <li><button>Rooms</button></li>
        <li><button>Current Room</button></li>
        <li><button>Automations</button></li>
      </ul>
    </nav>
  )
}