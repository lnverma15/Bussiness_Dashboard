

// import React, { useEffect, useRef } from 'react';
// import { select } from 'd3';

// const ColumnChart1 = () => {
//   const chartRef = useRef();

//   useEffect(() => {
//     const data = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50)); // Random data for the column chart
//     const months = ['January', 'February', 'March', 'April', 'May']; // Sample months data

//     if (chartRef.current) {
//       const svg = select(chartRef.current);

//       const width = 400;
//       const height = 200;
//       const margin = { top: 20, right: 20, bottom: 30, left: 50 };

//       const x = i => margin.left + i * ((width - margin.left - margin.right) / data.length);

//       const y = d => height - margin.bottom - d * 4;

//       svg.selectAll('rect')
//         .data(data)
//         .enter()
//         .append('rect')
//         .attr('x', (_, i) => x(i))
//         .attr('y', d => y(d))
//         .attr('width', (width - margin.left - margin.right) / data.length - 10)
//         .attr('height', d => (height - margin.bottom - y(d)))
//         .attr('fill', 'green');

//       svg.selectAll('text')
//         .data(months)
//         .enter()
//         .append('text')
//         .text(d => d)
//         .attr('x', (_, i) => x(i) + ((width - margin.left - margin.right) / data.length - 10) / 2)
//         .attr('y', height - margin.bottom + 15)
//         .attr('text-anchor', 'middle')
//         .attr('fill', 'black')
//         .style('font-size', '10px');
//     }
//   }, []);

//   return <svg ref={chartRef} width="400" height="220"></svg>;
// };

// export default ColumnChart1;




import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ColumnChart1 = () => {
  const chartRef = useRef();

  useEffect(() => {
    const data = Array.from({ length: 6 }, () => Math.floor(Math.random() * 50)); // Random data for the column chart
    const months = ['January', 'February', 'March', 'April', 'May', 'June']; // Sample month names

    if (chartRef.current) {
      const svg = d3.select(chartRef.current);

      const width = 400;
      const height = 200;
      const margin = { top: 20, right: 20, bottom: 30, left: 50 };

      const x = i => margin.left + i * ((width - margin.left - margin.right) / data.length);
      const columnWidth = ((width - margin.left - margin.right) / data.length) - 40;

      svg.selectAll('path')
        .data(data)
        .enter()
        .append('path')
        .attr('d', (d, i) => {
          const y = height - margin.bottom - d * 4;
          return `
                        M ${x(i)},${height - margin.bottom}
                        L ${x(i)},${y}
                        Q ${x(i) + columnWidth / 2},${y - 10} ${x(i) + columnWidth},${y}
                        L ${x(i) + columnWidth},${height - margin.bottom}
                        Z
                    `;
        })
        .attr('fill', 'green');

      svg.selectAll('text')
        .data(months)
        .enter()
        .append('text')
        .text(d => d)
        .attr('x', (_, i) => x(i) + columnWidth / 2)
        .attr('y', height - margin.bottom + 15)
        .attr('text-anchor', 'middle')
        .attr('fill', 'black')
        .style('font-size', '10px');
    }
  }, []);

  return <svg ref={chartRef} width="400" height="220"></svg>;
};

export default ColumnChart1;
