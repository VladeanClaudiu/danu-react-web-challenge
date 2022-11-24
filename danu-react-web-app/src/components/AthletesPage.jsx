import {NavLink, Routes} from "react-router-dom"

function AthletsPage(props) {
    return(
        <section className="athletes-page">
            <div className="athlete-head">
                <div className="athlete-profile">
                    <div className="profile-img">
                        <p>PF</p>
                    </div>
                    <div className="profile-info">
                        <p>Patrick Fearon</p>
                        <button>Edit Profile</button>
                    </div>
                </div>
                <div className="athlete-circle-graph">
                    <div className="load-graph">
                        <p>72%</p>
                        <p>Load</p>
                    </div>
                    <div className="recovery-graph">
                        <p>68%</p>
                        <p>Recovery</p>
                    </div>
                </div>
                <div className="athlete-stats">
                    <p>Gait - Swing Stance Ratio</p>
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