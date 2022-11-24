import {Link, NavLink, Route, Routes} from "react-router-dom"
import TestComponet from "./TestComponent"

function AthletsPage(props) {
    return(
        <section className="athletes-page">
            <div className="athlete-head">
                <div className="athlete-profile"></div>
                <div className="athlete-circle-graph"></div>
                <div className="athlete-stats"></div>  
            </div>
            <div className="athlete-main">
                <div className="athlete-nav">
                    <NavLink to="/athlete/overview">Overview</NavLink>
                    <NavLink to="/athlete/activity">Activity</NavLink>
                    <NavLink to="/athlete/test">Test</NavLink>

                   
                </div>
                <Routes>
                        <Route path='/athlete/test' element={<TestComponet />}/>
                </Routes>
            </div>
            <div>
                 
            </div>
        </section>
        
    )
}

export default AthletsPage