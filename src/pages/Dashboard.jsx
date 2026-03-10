import { Link } from 'react-router-dom'

export default function Dashboard({ rooms }) {
  return (
    <div>
      <h1>Dashboard</h1>

      {rooms.length === 0 ? (
        <p>No rooms available</p>
      ) : (
        rooms.map((room) => {
          const totalLights = room.lights.length
          const lightsOn = room.lights.filter((light) => light.on).length

          return (
            <Link
              key={room.id}
              to={`/rooms/${room.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '12px',
                  padding: '16px',
                  marginBottom: '16px',
                  cursor: 'pointer',
                }}
              >
                <h2>{room.name}</h2>
                <p>Occupied: {room.occupied ? 'Yes' : 'No'}</p>
                <p>Total Lights: {totalLights}</p>
                <p>Lights On: {lightsOn}</p>
              </div>
            </Link>
          )
        })
      )}
    </div>
  )
}
