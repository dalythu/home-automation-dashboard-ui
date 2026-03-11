export default function Automations({ setAllLights }) {
  return (
    <div>
      <h1>Automations</h1>

      <p>Use these controls to manage all lights in the home.</p>

      <button onClick={() => setAllLights(true)}>Turn All Lights On</button>

      <button onClick={() => setAllLights(false)}>Turn All Lights Off</button>
    </div>
  )
}
