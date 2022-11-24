import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage'
import {Route, Link} from 'react-router-dom'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  //dummy login-function used to simulate login async used as to avoid state error
  async function loginFunction(){
    await console.log("loggin in")
    await setTimeout(()=>{
      if(!loggedIn){
        console.log("logged in")
      }else{
        console.log("logged out")
      }
      setLoggedIn(prevValue => !prevValue) 
    },1000)   
  }

  //main application function
  function DanuDashboard(props) {
    const {logout} = props;
    return(
      <div>
        <nav className='dashboard-nav'>
          <img src="./danu.svg" alt="the danu logo"/>
          <Link className='nav-icon home-icon'>Home</Link>
          <Link className='nav-icon athletes-icon'>Athletes</Link>
          <Link className='nav-icon reports-icon'>Reports</Link>
          <Link className='nav-icon graphs-icon'>Graphs</Link>
          <Link className='nav-icon settings-icon'>Settings</Link>
          <a className='nav-logout-btn' onClick={logout}>Logout</a>
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
                      logout={loginFunction}
                    />}
    </div>
  )
}

export default App
