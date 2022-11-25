import { ResponsiveRadialBar } from '@nivo/radial-bar'

const RadialGuage = (props) => {
    const {data, title, guide} = props;
    const dataAmout = data[0].data[1].y
    const dataType = data[0].data[1].x

    return (
        <>
            <div className={`${title} radial-title`}>   </div>
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
                <h3 className='radial-data-title'>{title}</h3>
                <p className="radial-data-data"><span>{dataAmout}</span> {dataType}</p>
                <p className='radial-data-guide'>{guide}</p>
            </div>
        </>
    )
}

export default RadialGuage