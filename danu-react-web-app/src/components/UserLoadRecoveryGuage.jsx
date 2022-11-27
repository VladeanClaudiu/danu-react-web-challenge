import RadialGuage from "../charts/RadialGuage"
import {recoveryData, 
        loadData} from '../data/data'

function UserLoadRecoveryGuage(props) {
    const {load, recovery, startAngle, endAngle} = props
    const recoveryDataCustom = recoveryData(recovery)
    const loadDataCustom = recoveryData(load)

    console.log(recoveryDataCustom)
    return (
        <div className="athlete-circle-graph">
            <div className="load-graph">
                <RadialGuage
                    data = {loadDataCustom}
                    startAngle = {startAngle}
                    endAngle = {endAngle}
                    showData = {false}
                    theme = {"paired"}
                />
                <h4>{load}%</h4>
                <p>Load</p>
            </div>
            <div className="recovery-graph">
                <RadialGuage
                    data = {recoveryDataCustom}
                    startAngle = {startAngle}
                    endAngle = {endAngle}
                    showData = {false}
                    theme = {"set3"}
                />
                <h4>{recovery}%</h4>
                <p>Recovery</p>
            </div>
        </div>
    )
}

export default UserLoadRecoveryGuage