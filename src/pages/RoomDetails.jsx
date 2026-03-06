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
      <p>Lights: {room.lightsOn ? "On" : "Off"}</p>

      <button onClick={() => toggleLights(room.id)}>
        Toggle Lights
      </button>

      <div style={{ marginTop: "12px" }}>
        <Link to="/rooms">Back to Rooms</Link>
      </div>
    </div>
  );
}