import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Dashboard({ rooms }) {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=33.75&longitude=-84.39&current=temperature_2m,weather_code&timezone=auto&temperature_unit=fahrenheit',
        )
        const data = await response.json()
        setWeather(data.current)
      } catch (error) {
        console.error('Failed to fetch weather:', error)
      }
    }

    fetchWeather()
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>

      {weather && (
        <div
          style={{
            border: '1px solid #ccc',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '16px',
          }}
        >
          <h2>Atlanta Weather</h2>
          <p>Temperature: {weather.temperature_2m}°F</p>
          <p>Weather Code: {weather.weather_code}</p>
        </div>
      )}

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
