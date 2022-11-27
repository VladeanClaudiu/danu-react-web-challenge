import {NavLink} from "react-router-dom"
import Profile from "./Profile"

function AthletsPage(props) {
    return(
        <section className="athletes-page">
            <div className="athlete-head">
                <Profile 
                    name = {"Chris P Bacon"}
                />
                <div className="athlete-circle-graph">
                    <div className="load-graph">
                        <h4>72%</h4>
                        <p>Load</p>
                    </div>
                    <div className="recovery-graph">
                        <h4>68%</h4>
                        <p>Recovery</p>
                    </div>
                </div>
                <div className="athlete-stats">
                    <h3>Gait - Swing Stance Ratio</h3>
                    <table>
                        <tr>
                            <th>Max</th>
                            <th>Max</th>
                            <th>Max</th>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>15</td>
                            <td>15</td>
                        </tr>
                    </table>
                </div>  
            </div>
            <div className="athlete-main">
                <div className="athlete-nav">
                    <NavLink to="/athlete/overview">Overview</NavLink>
                    <NavLink to="/athlete/activity">Activity</NavLink>
                </div>
                
            </div>
        
        </section>
        
    )
}

export default AthletsPage