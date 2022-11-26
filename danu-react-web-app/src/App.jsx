import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage'
import {Routes, Route, Link} from 'react-router-dom'
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
          <img src="./danu.svg" alt="the danu logo"/>
          <Link to="/" className='nav-icon'><span className='home-icon'></span><br/>Home</Link>
          <Link to="/athlete" className='nav-icon '><span className='athletes-icon'></span><br/>Athletes</Link>
          <Link to="/reports" className='nav-icon '><span className='reports-icon'></span><br/>Reports</Link>
          <Link to="/graphs" className='nav-icon '><span className='graphs-icon'></span><br/>Graphs</Link>
          <Link to="/settings" className='nav-icon '><span className='settings-icon'></span><br/>Settings</Link>
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
