export default function Automations({ setAllLights }) {
  return (
    <div>
      <h1 className="page-title">Automations</h1>

      <div className="card">
        <p>Use these controls to manage all lights in the home.</p>

        <div className="button-row">
          <button onClick={() => setAllLights(true)}>Turn All Lights On</button>

          <button onClick={() => setAllLights(false)}>
            Turn All Lights Off
          </button>
        </div>
      </div>
    </div>
  )
}
