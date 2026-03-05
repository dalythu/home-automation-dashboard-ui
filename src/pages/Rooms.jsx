import { Link } from "react-router-dom";

export default function Rooms() {

  const rooms = [
    { id: "living-room", name: "Living Room" },
    { id: "kitchen", name: "Kitchen" },
    { id: "bedroom", name: "Bedroom" },
    { id: "bathroom", name: "Bathroom" }
  ];

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