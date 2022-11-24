import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  function loginFunction(){
    setLoggedIn(prevValue => !prevValue)
  }
  return (
    <div className="App">
      {!loggedIn ? <LoginPage
                        login={loginFunction}/> 
      : console.log("logged in")}
    </div>
  )
}

export default App
