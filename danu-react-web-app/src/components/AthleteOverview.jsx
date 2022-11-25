import Bar from "../charts/Bar"

function AthleteOverview(props) {
    return (
        <div className="athlete-overview">
            <h1>Overview</h1>
            <div className="bar-chart">
                {<Bar />}
            </div>
            
        
        </div>
    )
}

export default AthleteOverview