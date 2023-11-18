

import React, { useState } from 'react';
import ColumnChart1 from './ColumnChart1'; // Import the ColumnChart1 component
import ColumnChart2 from './ColumnChart2'; // Import the ColumnChart2 component
import LineChart from './LineChart'; // Import the LineChart component
import Table from './Table'; // Import the Table component
import PopUp from './PopUp'; // Import the PopUp component here
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import './Dashboard.css';
import RefreshIcon from '@mui/icons-material/Refresh'; // Assuming you have an appropriate icon for refresh

import { Grid, Card, CardHeader, CardContent, Button, Divider, Input, InputAdornment, Select, MenuItem } from '@mui/material';

import { randomDataGenerator } from '../utils/randomDataGenerator';

const Dashboard = (onDateChange) => {
  const [data, setData] = useState(randomDataGenerator());
  const [showUploadPopup, setShowUploadPopup] = useState(false); // State to handle the display of the upload popup

  const handleRandomize = () => {
    setData(randomDataGenerator());
  };

  const handleDateChange = (event) => {
    // You can implement date-based randomization here
    setData(randomDataGenerator());
  };

  const handleNewSalesInvoice = () => {
    setShowUploadPopup(true); // Show the upload popup when "New Sales Invoice" button is clicked
  };

  const handleRefresh = () => {
    // Logic for refreshing card data
  };

  return (

    <div className="dashboard">
      <div className="top-bar">
        {/* <Button variant="contained" onClick={handleRandomize}>Randomize Data</Button> */}
        {/* <Button variant="contained" onClick={handleNewSalesInvoice}>New Sales Invoice</Button> */}
        {/* Other elements in the top bar */}
      </div>
      <Grid container spacing={2} className="chart-container">
        <Grid item xs={12} sm={6}>
          <Card className="card">
            <CardHeader
              title="Checking account"
              sx={{
                '& .MuiCardHeader-title': {
                  height: '10px',
                  width: '130px',
                  fontSize: '15px', // Adjust the font size as needed
                  fontWeight: 'bold'

                },
              }}

              action={



                <div style={{ display: 'flex', marginLeft: '120px' }}>

                  <Select
                    displayEmpty
                    value=""
                    onChange={onDateChange}
                    style={{
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      width: '70%',
                      height: '30px',
                      marginRight: '10px'
                    }}
                  >
                    <MenuItem value="" disabled>
                      Manage
                    </MenuItem>
                    <MenuItem value="January">January</MenuItem>
                    <MenuItem value="February">February</MenuItem>
                  </Select>
                  <Select
                    displayEmpty
                    value=""
                    onChange={onDateChange}
                    style={{
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      width: '70%',
                      height: '30px'
                    }}
                  >
                    <MenuItem value="" disabled>
                      January
                    </MenuItem>
                    <MenuItem value="January">January</MenuItem>
                    <MenuItem value="February">February</MenuItem>
                  </Select>


                </div>
              }

            />
            <Divider />
            <CardContent>
              <LineChart />

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="card">
            <CardHeader
              title="Invoice owed to you"
              sx={{
                '& .MuiCardHeader-title': {
                  height: '10px',
                  width: '150px',
                  fontSize: '15px', // Adjust the font size as needed
                  fontWeight: 'bold'

                },
              }}
              action={
                <button onClick={handleNewSalesInvoice} style={{ color: 'green', height: '35px', width: '150px', border: 'none' }} ><strong>New Sales Invoice</strong></button>

              }
            />
            <Divider />
            <CardContent>
              <ColumnChart2 />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="card">
            <CardHeader
              title="Total cash flow"
              sx={{
                '& .MuiCardHeader-title': {
                  height: '10px',
                  width: '130px',
                  fontSize: '15px', // Adjust the font size as needed
                  fontWeight: 'bold'

                },
              }}
              action={
                <div>

                  <Box display="flex" alignItems="center">
                    <Box
                      bgcolor="green"
                      width="20px"
                      height="20px"
                      marginRight="10px"
                      borderRadius='5px'
                    />
                    <Typography>In</Typography>
                    <Box
                      bgcolor="green"
                      width="20px"
                      height="20px"
                      marginLeft="10px"
                      borderRadius='5px'

                    />
                    <Typography>Out</Typography>
                  </Box>
                </div>


              }
            />
            <Divider />
            <CardContent>
              <ColumnChart1 />

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="card">
            <CardHeader
              title="Account watchlist"
              sx={{
                '& .MuiCardHeader-title': {
                  height: '10px',
                  width: '150px',
                  fontSize: '15px', // Adjust the font size as needed
                  fontWeight: 'bold'

                },
              }}
            // action={
            //   <Button
            //     onClick={handleRefresh} startIcon={<RefreshIcon />}>
            //     {/* Refresh */}
            //   </Button>
            // }
            />
            <Divider />
            <CardContent>
              <Table />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {showUploadPopup && <PopUp />}
    </div>
  );
};

export default Dashboard;
