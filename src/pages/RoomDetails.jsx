import { useParams, Link } from "react-router-dom";

export default function RoomDetails() {
  const { roomId } = useParams();

  return (
    <div>
      <h1>Room Details</h1>
      <p>Room ID: {roomId}</p>

      <Link to="/rooms">Back to Rooms</Link>
    </div>
  );
}