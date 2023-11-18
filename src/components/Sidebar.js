


import React, { useState } from 'react';
import { List, ListItem, ListItemText, Avatar } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReportIcon from '@mui/icons-material/Report';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import logo from '../logo.png'; // Assuming logo.png is directly inside the src folder


const Sidebar = () => {
    const [clickedItem, setClickedItem] = useState('Dashboard'); // Default selected item is 'Dashboard'

    const handleItemClick = (itemName) => {
        if (clickedItem !== itemName) {
            setClickedItem(itemName);
        } else {
            setClickedItem(null); // Reset the clicked item if clicked again
        }
    };

    const renderListItem = (itemName, IconComponent) => (
        <ListItem
            button
            key={itemName}
            onClick={() => handleItemClick(itemName)}
            style={{
                backgroundColor: clickedItem === itemName ? 'green' : '',
                color: clickedItem === itemName ? 'white' : 'black',
            }}
        >
            <IconComponent />
            <ListItemText primary={itemName} />
        </ListItem>
    );

    return (
        <div className="sidebar">
            {/* <Avatar>
                <BusinessIcon />
            </Avatar> */}
            {/* <Avatar> */}
            <img src={logo} alt="Your Logo" style={{ width: '90%' }} />
            {/* </Avatar> */}
            <br />
            <br />
            <List>
                {renderListItem('Dashboard', DashboardIcon)}
                {renderListItem('Accounts', AccountBalanceIcon)}
                {renderListItem('Reports', ReportIcon)}
                {renderListItem('Advisor', SupervisorAccountIcon)}
                {renderListItem('Contacts', ContactMailIcon)}
            </List>
        </div>
    );
};

export default Sidebar;



// import React, { useState } from 'react';
// import { List, ListItem, ListItemText, Avatar, ListItemAvatar } from '@mui/material';
// import BusinessIcon from '@mui/icons-material/Business';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import ReportIcon from '@mui/icons-material/Report';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import ContactMailIcon from '@mui/icons-material/ContactMail';

// const Sidebar = () => {
//     const [clickedItem, setClickedItem] = useState('Dashboard'); // Default selected item is 'Dashboard'

//     const handleItemClick = (itemName) => {
//         if (clickedItem !== itemName) {
//             setClickedItem(itemName);
//         } else {
//             setClickedItem(null); // Reset the clicked item if clicked again
//         }
//     };

//     const renderListItem = (itemName, IconComponent) => (
//         <ListItem
//             button
//             key={itemName}
//             onClick={() => handleItemClick(itemName)}
//             style={{
//                 backgroundColor: clickedItem === itemName ? 'green' : '',
//                 color: clickedItem === itemName ? 'white' : 'black',
//             }}
//         >
//             <ListItemAvatar>
//                 <Avatar>
//                     <IconComponent />
//                 </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary={itemName} />
//         </ListItem>
//     );

//     return (
//         <div className="sidebar">
//             <Avatar>
//                 <BusinessIcon />
//             </Avatar>
//             <br />
//             <br />
//             <List>
//                 {renderListItem('Dashboard', DashboardIcon)}
//                 {renderListItem('Accounts', AccountBalanceIcon)}
//                 {renderListItem('Reports', ReportIcon)}
//                 {renderListItem('Advisor', SupervisorAccountIcon)}
//                 {renderListItem('Contacts', ContactMailIcon)}
//             </List>
//         </div>
//     );
// };

// export default Sidebar;



