import {NavLink} from "react-router-dom"
import Profile from "./Profile"
import UserLoadRecoveryGuage from "./UserLoadRecoveryGuage"
import AthleteStats from "./AthleteStats"

function AthletsPage(props) {
    return(
        <section className="athletes-page">
            <div className="athlete-head">
                <Profile 
                    name = {"Patrick Fearon"}
                />
                <UserLoadRecoveryGuage 
                    load = {52}
                    recovery = {88}
                    startAngle = {0}
                    endAngle = {360}
                />
                <AthleteStats 
                    title = {"Gait - Swing Stance Ratio"}
                    tableHeadings = {["Max", "Mean", "Min"]} 
                    tableData = {[42.1, 36.8, 12.4, 19.5, 97.3, 6.1, 42.1]}
                />
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