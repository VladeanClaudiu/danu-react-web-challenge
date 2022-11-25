import { ResponsiveRadialBar } from '@nivo/radial-bar'

const RadialGuage = (props) => {
    const {data} = props;
    console.log(data)
    return (
        <>
            <div className='sleep-radial-title'>   </div>
            <ResponsiveRadialBar
                data={data}
                valueFormat=">-.2f"
                startAngle={-110}
                endAngle={110}
                padding={0.4}
                cornerRadius={2}
                innerRadius={.7}
                margin={{ top: 10, right: 10, bottom: 40, left: 10 }}
                colors={{ scheme: 'paired' }}
                enableRadialGrid={false}
                enableCircularGrid={false}
                radialAxisStart={null}
                circularAxisOuter={null}
                isInteractive={false}
                legends={[]}
            />
            <div className='radial-data'>
                <h3 className='radial-data-title'>Title</h3>
                <p className="data">6 hr</p>
                <p className='data-guide'>Sleeping Good</p>
            </div>
        </>
    )
}

export default RadialGuage