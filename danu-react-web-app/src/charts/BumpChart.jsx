import { ResponsiveBump } from '@nivo/bump'
import data from '../data/bumpData'

const BumpChart = () => {
    return (
        <ResponsiveBump
        data={data}
        colors={{ scheme: 'set1' }}
        lineWidth={5}
        inactiveOpacity={0.25}
        endLabelPadding={15}
        endLabelTextColor={{ from: 'color', modifiers: [] }}
        pointSize={12}
        activePointSize={9}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={5}
        activePointBorderWidth={2}
        pointBorderColor={{ from: 'serie.color', modifiers: [] }}
        axisTop={{
            tickSize: 4,
            tickPadding: 8,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -43
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ranking',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        motionConfig="slow"
        margin={{ top: 70, right: 80, bottom: 100, left: 60 }}
        axisRight={null}
    />
    )
}

export default BumpChart