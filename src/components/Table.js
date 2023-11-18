import React from 'react';

// const Table = () => {
//     const tableData = Array.from({ length: 6 }, () => ({
//         // name: `Item ${Math.floor(Math.random() * 100)}`,
//         name: ['Sales', 'Advertising', 'Inventory', 'Entertainment', 'Product'],
//         value: Math.floor(Math.random() * 100),
//         ytd: Math.floor(Math.random() * 100),
//     })); // Random data for the table

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Account</th>
//                     <th>This Month</th>
//                     <th>YTD</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {tableData.map((item, index) => (
//                     <tr key={index}>
//                         <td>{item.name}</td>
//                         <td>{item.value}</td>
//                         <td>{item.ytd}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// };



const Table = () => {
    const accountNames = ['Sales', 'Advertising', 'Inventory', 'Entertainment', 'Product'];

    const tableData = accountNames.map((name) => ({
        name,
        value: Math.floor(Math.random() * 100000),
        ytd: Math.floor(Math.random() * 100000),
    })); // Random data for the table


    return (
        <table>
            <thead>
                <tr>
                    <th>Account</th>
                    <th style={{ paddingLeft: '90px' }}>This Month</th>
                    <th style={{ paddingLeft: '90px' }}>YTD</th>

                </tr>
            </thead>
            <br />
            <tbody>
                {tableData.map((item, index) => (
                    <tr key={index}>
                        <td style={{ paddingLeft: '30px' }}>{item.name}</td>
                        <td style={{ paddingLeft: '90px' }}>{item.value}</td>
                        <td style={{ paddingLeft: '90px' }}>{item.ytd}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
