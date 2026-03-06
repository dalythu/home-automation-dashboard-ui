import { useParams, Link } from "react-router-dom";

export default function RoomDetails({ rooms, toggleLights }) {
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
            {light.name} — {light.on ? "On" : "Off"}
          </div>
        ))
      )}

      <Link to="/rooms">Back to Rooms</Link>
    </div>
  );
}