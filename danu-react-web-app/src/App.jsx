import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage'
import {Routes, Route, NavLink} from 'react-router-dom'
import HomePage from './components/HomePage'
import AthletsPage from './components/AthletesPage'
import AthleteOverview from './components/AthleteOverview'
import AthleteActivity from './components/AthleteActivity'


function App() {

  if(localStorage.getItem('isLoggedIn') ==  null){
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
  }
  console.log(JSON.parse(localStorage.getItem('isLoggedIn')))

  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')))

  //dummy login-function used to simulate login async used as to avoid state error
  async function loginFunction(){
    await console.log("logging in")
    await setTimeout(()=>{
      if(!loggedIn){
        console.log("logged in")
      }else{
        console.log("logged out")
      }
     setLoggedIn(prevValue => !prevValue) 
     localStorage.setItem('isLoggedIn', JSON.stringify(!loggedIn)); 
      
    },1000) 
  }

  //main application function
  function DanuDashboard(props) {
    const {logout} = props;
    return(
      <div>
        <nav className='dashboard-nav'>
          <ul>
            <img src="./danu.svg" alt="the danu logo"/>
            <NavLink to="/" className='nav-icon'><span className='home-icon active-icon'></span><br/>Home</NavLink>
            <NavLink to="/athlete/overview" className='nav-icon '><span className='athletes-icon active-icon'></span><br/>Athletes</NavLink>
            <NavLink to="/reports" className='nav-icon '><span className='reports-icon active-icon'></span><br/>Reports</NavLink>
            <NavLink to="/graphs" className='nav-icon '><span className='graphs-icon active-icon'></span><br/>Graphs</NavLink>
            <NavLink to="/settings" className='nav-icon '><span className='settings-icon active-icon'></span><br/>Settings</NavLink>
          </ul>
          <a className='nav-logout-btn' onClick={logout}>Logout</a>
        </nav>
        
        <Routes>
          <Route exact path='/' element ={<HomePage />} />
          <Route exact path='/athlete' element ={<AthletsPage />} />
          <Route exact path='/athlete/overview' element ={<div><AthletsPage /><AthleteOverview /></div>} />
          <Route exact path='/athlete/activity' element ={<div><AthletsPage /><AthleteActivity /></div>} />
          <Route path='/athlete/:anything' element ={<div><AthletsPage /></div>} />
        </Routes>
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
