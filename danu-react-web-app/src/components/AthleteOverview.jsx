import Bar from "../charts/Bar"
import RadialBar from "../charts/RadialBar"
import LineChart from "../charts/LineChart"
import RadialGuage from "../charts/RadialGuage"
import {sleepData, calorieData, stepsData} from '../data/sleepGuageData'

function AthleteOverview(props) {
    const sleepRadialData = sleepData();
    const calorieRadialData = calorieData();
    const stepsRadialData = stepsData();

    console.log(sleepRadialData)
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
            <div className="progress-charts">
                <h2>Your Progress</h2>
                <div className="radial-charts">
                    <div className="sleep-radial-chart">
                        {<RadialGuage 
                            data = {sleepRadialData}
                            title = {"sleep"}
                            guide = {"Sleeping Good"}
                            />}
                    </div>
                    <div className="sleep-radial-chart">
                        {<RadialGuage 
                            data = {calorieRadialData}
                            title = {"calories"}
                            guide = {"Keep Going"}
                            />}
                    </div>
                    <div className="sleep-radial-chart">
                        {<RadialGuage 
                            data = {stepsRadialData}
                            title = {"steps"}
                            guide = {"Step Master"}
                            />}
                    </div>
           
                </div>
            </div>
             
            </div>
            
            
        
        </div>
    )
}

export default AthleteOverview