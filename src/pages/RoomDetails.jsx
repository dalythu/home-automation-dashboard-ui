import { useParams, Link } from "react-router-dom";

export default function RoomDetails({ rooms, toggleLight }) {
  const { roomId } = useParams();

  const room = rooms.find((r) => r.id === roomId);

  if (!room) {
    return <h1>Room not found</h1>;
  }

  return (
    <div>
      <h1>{room.name}</h1>

      <p>Occupied: {room.occupied ? "Yes" : "No"}</p>

      <h2>Lights</h2>

      {room.lights.length === 0 ? (
        <p>No lights in this room</p>
      ) : (
        room.lights.map((light) => (
          <div key={light.id}>
            <p>{light.name} — {light.on ? "On" : "Off"}</p>
            <button onClick={() => toggleLight(room.id, light.id)}>Toggle</button>
          </div>
        ))
      )}

      <Link to="/rooms">Back to Rooms</Link>
    </div>
  );
}
