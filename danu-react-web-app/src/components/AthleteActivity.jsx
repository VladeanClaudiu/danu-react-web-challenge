import {DataGrid} from "@mui/x-data-grid"
import {activityData} from "../data/data"

function AthleteActivity(props) {
    const {athleteId} = props
    const activityDataUnpacked = activityData(athleteId);
    
    const exerciseOptions = activityDataUnpacked.map(activityOption => activityOption.profile.exercise.map(item => <option>{item.data.exercise}</option>))
    const activityTableHeadings = activityDataUnpacked.map(activityHead => {
        const headingsMapped = Object.keys(activityHead.profile.exercise[0].data).map(heading => <h4>{heading}</h4>)
        return (
            <div className="athlete-activity-table-headings">
                    <h4>{Object.keys(activityHead)}</h4>
                    {headingsMapped}
            </div>
        )
    })
    

    const activityTableData = activityDataUnpacked.map(activityTableD => {
        const activityMapped = activityTableD.profile.exercise.map(activities => {
            return (
                  <div key={activityTableD.profile.id} className = "athlete-activity-table-datacell">
                        <input type="checkbox" />
                        <div className="headings">
                            <h4>{activityTableD.profile.fName}  {activityTableD.profile.lName}</h4>
                            <h4>{activities.data.exercise}</h4>
                            <h4>{activities.data.date}</h4>
                            <h4>{activities.data.test}</h4>
                            <h4>{activities.data.jumpHeight}</h4>
                            <h4>{activities.data.jumpSpeed}</h4>
                            <h4>{activities.data.powerGenerated}</h4>
                        </div>   
                  </div>         
            )
        })
        return activityMapped
    })

    
    // <div className = "athlete-activity-table-datacell">
    //                     <input type="checkbox" />
    //                     <div className="headings">
    //                         <h4>Heading 1</h4>
    //                         <h4>Heading 2</h4>
    //                         <h4>Heading 3</h4>
    //                         <h4>Heading 4</h4>
    //                         <h4>Heading 5</h4>
    //                         <h4>Heading 6</h4>
    //                         <h4>Heading 7</h4>
    //                     </div>
    //                 </div>

    

    // const columns = [
    //     { field: 'fullName', headerName: 'Full name', width: 140 },
    //     { field: 'date', headerName: 'Date', type: 'date', width: 300}, 
    //     { field: 'test', headerName: 'Test', width: 100,},
    //     { field: 'jumpHeight', headerName: 'Jump Height', width: 100,},
    //     { field: 'topSpeed', headerName: 'Top Speed', width: 100,},
    //     { field: 'endurance', headerName: 'Endurance', width: 100,}, 
    //   ];

    //   const rows = [
    //     { id: 1, fullName: 'Claudiu Vladean', date: new Date(1995, 11, 19), test: "SQJ", jumpHeight: 92, topSpeed: 29, endurance: 4},
    //     { id: 2, fullName: 'Claudiu Vladean', date: new Date(2070, 1, 3), test: "SQJ", jumpHeight: 92, topSpeed: 29, endurance: 4},
    //     { id: 3, fullName: 'Claudiu Vladean', date: new Date(1995, 11, 9), test: "SQJ", jumpHeight: 92, topSpeed: 29, endurance: 4},
    //     { id: 4, fullName: 'Claudiu Vladean', date: new Date(1695, 5, 1), test: "SQJ", jumpHeight: 92, topSpeed: 29, endurance: 4},
    //     { id: 5, fullName: 'Claudiu Vladean', date: new Date(1695, 12, 7), test: "SQJ", jumpHeight: 92, topSpeed: 29, endurance: 4},
    //     { id: 6, fullName: 'Claudiu Vladean', date: new Date(1985, 1, 21), test: "SQJ", jumpHeight: 92, topSpeed: 29, endurance: 4},
      
    //   ];

    // return (
    //     <div className="athlete-activity">
    //         <h1>Activity</h1>
    //         <div className="activity-table">
    //             <DataGrid
    //                 rows={rows}
    //                 columns={columns}
    //                 pageSize={5}
    //                 rowsPerPageOptions={[5]}
    //                 checkboxSelection
    //             />
    //         </div>
            
    //     </div>
    // )



    return (
        <div className="athlete-activity">
            <div className="athlete-activity-title">
                <h4>Exercise Type</h4>
                <select className="activity-selector">
                    {exerciseOptions}
                </select>
            </div>
            <div className="athlete-activity-date">
                <div>
                   <h4>Date From:</h4>
                    <input 
                        type="date" 
                        id="start" 
                        name="trip-start"
                        min="2018-01-01" 
                        max="2030-12-31"/>
                </div>
                <div>
                   <h4>Date To:</h4>
                    <input 
                        type="date" 
                        id="start" 
                        name="trip-start"
                        min="2018-01-01" max="2030-12-31"/>
                </div>  
            </div>
            <div className="athlete-activity-tables">
                {activityTableHeadings}
                <div className="athlete-activity-table-datacells">

                    {activityTableData}
                    {/* <div className = "athlete-activity-table-datacell">
                        <input type="checkbox" />
                        <div className="headings">
                            <h4>Heading 1</h4>
                            <h4>Heading 2</h4>
                            <h4>Heading 3</h4>
                            <h4>Heading 4</h4>
                            <h4>Heading 5</h4>
                            <h4>Heading 6</h4>
                            <h4>Heading 7</h4>
                        </div>
                    </div> */}
                </div>
            </div>
            
        </div>
    )
}

export default AthleteActivity