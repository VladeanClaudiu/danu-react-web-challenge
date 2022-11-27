import {DataGrid} from "@mui/x-data-grid"


console.log(DataGrid)
function AthleteActivity(props) {
    const columns = [
        { field: 'fullName', headerName: 'Full name', width: 140 },
        { field: 'date', headerName: 'Date', type: 'date', width: 100}, 
        { field: 'test', headerName: 'Test', width: 100,},
        { field: 'jumpHeight', headerName: 'Jump Height', width: 100,},
        { field: 'topSpeed', headerName: 'Top Speed', width: 100,},
        { field: 'endurance', headerName: 'Endurance', width: 100,}, 
      ];

      const rows = [
        { id: 1, fullName: 'Claudiu Vladean', date: "10.11.1995", test: "SQJ", jumpHeight: 92, topSpeed: 29, endurance: 4},
        { id: 2, fullName: 'Claudiu Vladean', date: "10.11.1995", test: "SQJ", jumpHeight: 92, topSpeed: 29, endurance: 4},
        { id: 3, fullName: 'Claudiu Vladean', date: "10.11.1995", test: "SQJ", jumpHeight: 92, topSpeed: 29, endurance: 4},
        { id: 4, fullName: 'Claudiu Vladean', date: "10.11.1995", test: "SQJ", jumpHeight: 92, topSpeed: 29, endurance: 4},
        { id: 5, fullName: 'Claudiu Vladean', date: "10.11.1995", test: "SQJ", jumpHeight: 92, topSpeed: 29, endurance: 4},
        { id: 6, fullName: 'Claudiu Vladean', date: "10.11.1995", test: "SQJ", jumpHeight: 92, topSpeed: 29, endurance: 4},
      
      ];

    return (
        <div className="athlete-activity">
            <h1>Activity</h1>
            <div className="activity-table">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
            
        </div>
    )
}

export default AthleteActivity