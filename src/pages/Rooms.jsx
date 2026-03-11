import { Link } from 'react-router-dom'

export default function Rooms({ rooms }) {
  return (
    <div>
      <h1 className="page-title">Rooms</h1>

      {rooms.map((room) => (
        <div key={room.id}>
          <Link to={`/rooms/${room.id}`}>{room.name}</Link>
        </div>
      ))}
    </div>
  )
}
