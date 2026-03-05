import { useParams, Link } from "react-router-dom";
import { rooms } from "../data/rooms";

export default function RoomDetails() {
  const { roomId } = useParams();
  const room = rooms.find((r) => r.id === roomId)

  if (!room) {
    return <h1>Room not found</h1>
}

  return (
    <div>
      <h1>Room Details</h1>
      <p>Room ID: {roomId}</p>

      <Link to="/rooms">Back to Rooms</Link>
    </div>
  );
}