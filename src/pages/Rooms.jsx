import { Link } from "react-router-dom";
import { rooms } from "../data/rooms.js"

export default function Rooms() {

  return (
    <div>
      <h1>Rooms</h1>

      {rooms.map((room) => (
        <div key={room.id}>
          <Link to={`/rooms/${room.id}`}>{room.name}</Link>
        </div>
      ))}

    </div>
  );
}