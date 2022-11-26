import { ResponsiveBar } from '@nivo/bar'

const Bar = (props) => {
    const { data, 
            indexBy = "Month", 
            bottomLegend = "Month", 
            leftLegend = "Steps", 
            theme = "set2",
            keys = [
                'Highest',
                'Lowest',
                'Average',
            ],
            axisBottom, 
            axisLeft
          } = props;
    return (
        <ResponsiveBar
        data={data}
        keys={keys}
        indexBy={`${indexBy}`}
        margin={{ top: 20, right: 50, bottom: 170, left: 80 }}
        padding={0.05}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: `${theme}` }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        borderRadius={5}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: `${bottomLegend}`,
            legendPosition: 'middle',
            legendOffset: 35
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: `${leftLegend}`,
            legendPosition: 'middle',
            legendOffset: -60
        }}
        enableGridY={false}
        enableLabel={false}
        labelSkipHeight={6}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'row',
                justify: false,
                translateX: 10,
                translateY: 70,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Stepcount monthly"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in Month: "+e.indexValue}}
    />
    );
};

export default Bar;