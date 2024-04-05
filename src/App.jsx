import { useState } from 'react'
import './App.css' /* import your CSS styling for App.jsx */
import jamz_logo from './assets/images/JaMz_logo.png'
import jar from './assets/images/jam_jar.png'
import NavBar from './components/NavigationBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class='header'>
	      <img id='logo' src={jamz_logo}></img>
	      <NavBar />
      </div>
      <div class='title_page'>
	      <div id='title'>
	        <h2 class='title-1'>JaMz</h2>
          <h1 class='title-2'>React App</h1>
        </div>
        <img id='jar' src={jar}></img>
      </div>
    </>
  )
}

export default App



