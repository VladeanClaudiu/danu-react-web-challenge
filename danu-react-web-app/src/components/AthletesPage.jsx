import {Link} from "react-router-dom"

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
                    <Link to="/athlete/overview">Overview</Link>
                    <Link to="/athlete/activity">Activity</Link>
                </div>
            </div>
        </section>
    )
}

export default AthletsPage