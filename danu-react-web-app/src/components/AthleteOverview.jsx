import Bar from "../charts/Bar"
import RadialBar from "../charts/RadialBar"
import BumpChart from "../charts/BumpChart"
import LineChart from "../charts/LineChart"

function AthleteOverview(props) {
    return (
        <div className="athlete-overview">
            <h1>Dashboard</h1>
            <div className="overview-charts">
            <div className="bump-chart">
                    <h2>Activity</h2>
                    {<LineChart />}
                </div>
                <div className="radial-bar-chart">
                    <h2>Sleep</h2>
                    {<RadialBar />}
                </div>
                <div className="bar-chart">
                    <h2>Steps</h2>
                    {<Bar />}
                </div>
             
            </div>
            
            
        
        </div>
    )
}

export default AthleteOverview