import Bar from "../charts/Bar"
import RadialBar from "../charts/RadialBar"
import LineChart from "../charts/LineChart"
import RadialGuage from "../charts/RadialGuage"
import {sleepData, 
        calorieData, 
        stepsData, 
        barData, 
        lineData, 
        radialBarData,
        calorieBarData} from '../data/data'

function AthleteOverview(props) {
    const sleepRadialData = sleepData();
    const calorieRadialData = calorieData();
    const stepsRadialData = stepsData();
    const barChartData = barData();
    const lineChartData = lineData();
    const radialBarDataChart = radialBarData();
    const calorieBarDataChart = calorieBarData()

    console.log(sleepRadialData)
    return (
        <div className="athlete-overview">
            <h1>Dashboard</h1>
            <div className="overview-charts">
                <div className="bump-chart">
                        <h2>Activity</h2>
                        {<LineChart 
                            data = {lineChartData}
                        />}
                </div>
                <div className="radial-bar-chart">
                    <h2>Sleep</h2>
                    {<RadialBar 
                        data = {radialBarDataChart}
                    />}
                </div>
                <div className="bar-chart">
                    <h2>Steps</h2>
                    {<Bar 
                        data = {barChartData}
                    />}
                </div>
                <div className="progress-charts">
                    <h2>Your Progress</h2>
                    <div className="radial-charts">
                        <div className="sleep-radial-chart">
                            {<RadialGuage 
                                data = {sleepRadialData}
                                title = {"sleep"}
                                guide = {"Sleeping Good"}
                                theme = {"set3"}
                                isInteractive = {false}
                                hasTitle = {true}
                                />}
                        </div>
                        <div className="sleep-radial-chart">
                            {<RadialGuage 
                                data = {calorieRadialData}
                                title = {"calories"}
                                guide = {"Keep Going"}
                                theme = {"red_yellow_blue"}
                                isInteractive = {false}
                                hasTitle = {true}
                                />}
                        </div>
                        <div className="sleep-radial-chart">
                            {<RadialGuage 
                                data = {stepsRadialData}
                                title = {"steps"}
                                guide = {"Step Master"}
                                theme = {"pink_yellowGreen"}
                                isInteractive = {false}
                                hasTitle = {true}
                                />}
                        </div>
                    </div>
                </div> 
                <div className="calories-bar-chart">
                <h2>Calories</h2>
                    {<Bar 
                        data = {calorieBarDataChart}
                        indexBy = {"Time"}
                        axisBottom = {"Time"}
                        axisLeft = {"Calories"}
                        bottomLegend = {"Time"}
                        leftLegend = {"Calories"}
                        theme = {"pastel1"}
                        keys = {["Bad", "Good", "Over"]}
                    />}                    
                </div>     

            </div>   
        </div>
    )
}

export default AthleteOverview