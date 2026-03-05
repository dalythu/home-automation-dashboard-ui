import './App.css'
import SideBar from './components/SideBar.jsx'
import MainContent from './components/MainContent.jsx'

export default function App() {

  return (
    <div className="app-layout">
      <SideBar /> 
      <MainContent />
    </div>
  )
}