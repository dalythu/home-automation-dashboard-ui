export default function LightCard({ light, roomId, toggleLight, removeLight }) {
  return (
    <div className="card">
      <h3>{light.name}</h3>
      <p>Status: {light.on ? 'On' : 'Off'}</p>

      <div className="button-row">
        <button onClick={() => toggleLight(roomId, light.id, light.on)}>
          Turn {light.on ? 'Off' : 'On'}
        </button>

        <button onClick={() => removeLight(roomId, light.id)}>Remove</button>
      </div>
    </div>
  )
}
