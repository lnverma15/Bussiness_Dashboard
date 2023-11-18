// import React, { useEffect, useRef } from 'react';
// import { scaleLinear, line, select } from 'd3';

// const LineChart = () => {
//     const chartRef = useRef();

//     useEffect(() => {
//         const data = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50)); // Random data for the line chart

//         if (chartRef.current) {
//             const svg = select(chartRef.current);

//             const width = 300;
//             const height = 150;
//             const margin = { top: 20, right: 20, bottom: 30, left: 50 };

//             const x = scaleLinear()
//                 .domain([0, data.length - 1])
//                 .range([margin.left, width - margin.right]);

//             const y = scaleLinear()
//                 .domain([0, Math.max(...data)])
//                 .range([height - margin.bottom, margin.top]);

//             const lineGenerator = line()
//                 .x((d, i) => x(i))
//                 .y(d => y(d));

//             svg.append('path')
//                 .datum(data)
//                 .attr('fill', 'none')
//                 .attr('stroke', 'blue')
//                 .attr('stroke-width', 2)
//                 .attr('d', lineGenerator);
//         }
//     }, []);

//     return <svg ref={chartRef} width="300" height="150"></svg>;
// };

// export default LineChart;



import React, { useEffect, useRef } from 'react';
import { scaleLinear, line, select } from 'd3';

const LineChart = () => {
    const chartRef = useRef();

    useEffect(() => {
        const data = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50));

        if (chartRef.current) {
            const svg = select(chartRef.current);

            const width = 300;
            const height = 150;
            const margin = { top: 20, right: 20, bottom: 30, left: 50 };

            const x = scaleLinear()
                .domain([0, data.length - 1])
                .range([margin.left, width - margin.right]);

            const y = scaleLinear()
                .domain([0, Math.max(...data)])
                .range([height - margin.bottom, margin.top]);

            const lineGenerator = line()
                .x((d, i) => x(i))
                .y(d => y(d));

            // Render the line
            svg.append('path')
                .datum(data)
                .attr('fill', 'none')
                .attr('stroke', 'blue')
                .attr('stroke-width', 2)
                .attr('d', lineGenerator);

            // Add text for data values below the line
            svg.selectAll('text')
                .data(data)
                .enter()
                .append('text')
                .text(d => d) // Display data value
                .attr('x', (d, i) => x(i)) // Position the text horizontally based on data point index
                .attr('y', height - margin.bottom + 15) // Position the text vertically below the line
                .attr('text-anchor', 'middle') // Align text to the center of each data point
                .attr('fill', 'black') // Font color
                .style('font-size', '10px'); // Font size
        }
    }, []);

    return <svg ref={chartRef} width="300" height="170"></svg>; // Increased height to accommodate text
};

export default LineChart;
