import Dashboard from "./Dashboard.jsx"
import Rooms from "./Rooms.jsx"
import CurrentRoom from "./CurrentRoom.jsx"
import Automations from "./Automations.jsx"

export default function SideBar() {
    return (
        <section>
            <Dashboard />
            <Rooms />
            <CurrentRoom />
            <Automations />
        </section>

    )
}