 function AthleteStats(props) {
    const {title, tableHeadings, tableData} = props
    const tableHead = tableHeadings.map(item => (<th key={item}>{item}</th>))
    const max = Math.max(...tableData)
    const mean = (tableData.reduce((prev, curr) => prev + curr)/(tableData.length)).toFixed(1)
    const min = Math.min(...tableData)

    console.log(mean)

    return (
        <div className="athlete-stats">
                    <h3>{title}</h3>
                    <table>
                        <tr>
                            {tableHead}
                        </tr>
                        <tr>
                            <td>{max}</td>
                            <td>{mean}</td>
                            <td>{min}</td>
                        </tr>
                    </table>
                </div>  
    )
 }


 export default AthleteStats