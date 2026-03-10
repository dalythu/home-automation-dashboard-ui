export default function LightCard({ light, roomId, toggleLight, removeLight }) {
  return (
    <div>
      <h3>{light.name}</h3>
      <p>Status: {light.on ? 'On' : 'Off'}</p>
      <button onClick={() => toggleLight(roomId, light.id, light.on)}>
        Toggle
      </button>
      <button onClick={() => removeLight(roomId, light.id)}>Remove</button>
    </div>
  )
}
