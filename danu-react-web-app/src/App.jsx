import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  function loginFunction(){
    console.log("loggin in")
    setTimeout(()=>{
      setLoggedIn(prevValue => !prevValue)
      console.log("logged in")
    },1000)
    
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
