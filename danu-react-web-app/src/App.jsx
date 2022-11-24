import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  //dummy login-function used to simulate login
  function loginFunction(){
    console.log("loggin in")
    setTimeout(()=>{
      setLoggedIn(prevValue => !prevValue)
      console.log("logged in")
    },1000)   
  }

  //main application function
  function DanuDashboard() {
    return(
      <h1>Hello World</h1>
    )
  }

  return (
    <div className="App">
      {!loggedIn ? <LoginPage
                      login={loginFunction}
                    /> 
                 : <DanuDashboard

                    />}
    </div>
  )
}

export default App
