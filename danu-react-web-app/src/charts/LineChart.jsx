import { ResponsiveLine } from '@nivo/line'
import data from '../data/lineData'

const LineChart = () => (
    <ResponsiveLine
        data={data}
        margin={{ top: 40, right: 110, bottom: 130, left: 60 }}
        xScale={{ type: 'point' }}
        xFormat=" >-"
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Month',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Weight (kg)',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'set3' }}
        lineWidth={5}
        pointSize={15}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderColor={{ from: 'color', modifiers: [] }}
        pointLabelYOffset={-12}
        crosshairType="bottom"
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        motionConfig="wobbly"
    />
)

export default LineChart