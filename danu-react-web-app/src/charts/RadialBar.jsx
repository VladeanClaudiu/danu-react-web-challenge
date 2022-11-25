import { ResponsiveRadialBar } from '@nivo/radial-bar'
import data from '../data/radialBarData'

const RadialBar = () => {
    return(
        <ResponsiveRadialBar
        data={data}
        valueFormat=" >-.2f"
        innerRadius={0.4}
        padding={0.25}
        cornerRadius={6}
        margin={{ top: 40, right: 80, bottom: 150, left: 80 }}
        colors={{ scheme: 'spectral' }}
        borderColor={{ theme: 'background' }}
        enableRadialGrid={false}
        enableCircularGrid={false}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 11, tickPadding: 15, tickRotation: -15 }}
        labelsSkipAngle={11}
        labelsRadiusOffset={0.55}
        motionConfig="slow"
        transitionMode="startAngle"
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'row',
                justify: false,
                translateX: 33,
                translateY: 60,
                itemWidth: 100,
                itemHeight: 29,
                itemsSpacing: 0,
                symbolSize: 20,
                itemDirection: 'left-to-right'
            }
        ]}
    />
    )
}

export default RadialBar