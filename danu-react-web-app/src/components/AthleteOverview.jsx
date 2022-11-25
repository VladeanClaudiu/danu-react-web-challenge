import Bar from "../charts/Bar"
import RadialBar from "../charts/RadialBar"

function AthleteOverview(props) {
    return (
        <div className="athlete-overview">
            <h1>Overview</h1>
            <div className="overview-charts">
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