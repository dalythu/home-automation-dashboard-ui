import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Dashboard({ rooms }) {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=33.75&longitude=-84.39&current=temperature_2m,weather_code&temperature_unit=fahrenheit',
        )
        const data = await response.json()
        setWeather(data.current)
      } catch (error) {
        console.error('Failed to fetch weather:', error)
      }
    }

    fetchWeather()
  }, [])

  function getWeatherIcon(code) {
    const icons = {
      0: '☀️',
      1: '🌤',
      2: '⛅',
      3: '☁️',
      45: '🌫',
      51: '🌦',
      61: '🌧',
      71: '❄️',
      95: '⛈',
    }

    return icons[code] || '🌡'
  }

  return (
    <div>
      <h1 className="page-title">Dashboard</h1>

      <div className="card-grid">
        {weather && (
          <div className="card" style={{ textAlign: 'center' }}>
            <h2>Atlanta Weather</h2>

            <div style={{ fontSize: '64px', marginBottom: '8px' }}>
              {getWeatherIcon(weather.weather_code)}
            </div>

            <p style={{ fontWeight: 'bold', fontSize: '25px' }}>
              {weather.temperature_2m}°F
            </p>
          </div>
        )}

        {rooms.length === 0 ? (
          <div className="card">
            <p>No rooms available</p>
          </div>
        ) : (
          rooms.map((room) => {
            const totalLights = room.lights.length
            const lightsOn = room.lights.filter((light) => light.on).length

            return (
              <Link
                key={room.id}
                to={`/rooms/${room.id}`}
                className="link-card"
              >
                <div className="card">
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
    </div>
  )
}
