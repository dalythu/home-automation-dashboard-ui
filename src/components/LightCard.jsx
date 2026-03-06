export default function LightCard({ light, roomId, toggleLight }) {
  return (
    <div>
      <h3>{light.name}</h3>
      <p>Status: {light.on ? 'On' : 'Off'}</p>
      <button onClick={() => toggleLight(roomId, light.id)}>Toggle</button>
    </div>
  )
}
