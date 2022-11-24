import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage'
import {Route, Link} from 'react-router-dom'

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
      <div>
        <nav className='dashboard-nav'>
          <img src="./danu.svg" alt="the danu logo"/>
          <Link>Home</Link>
          <Link>Athletes</Link>
          <Link>Reports</Link>
          <Link>Graphs</Link>
          <Link>Settings</Link>
        </nav>
      </div>
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
