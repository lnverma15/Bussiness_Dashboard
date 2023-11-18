import React from 'react';
import { Button, Select, MenuItem, InputAdornment, IconButton, Input, Tooltip, Badge } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

import { Grid, Card, CardHeader, CardContent, Typography, Divider } from '@mui/material';

const TopBar = ({ onDateChange, onRandomize }) => {
  const count = 1;
  return (


    <div className="topbar">
      <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
        {/* Search Bar */}
        <Grid item xs={3} sm={3}>
          <Input
            placeholder=""
            disableUnderline={true}
            startAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '5px 10px',
              width: '100%',
            }}
          />
        </Grid>


        {/* Bell Icon */}
        <Grid item xs={1} sm={1}>
          <Badge badgeContent={count} color="error">


            <Tooltip title="Notifications">
              <IconButton>
                <NotificationsIcon />
              </IconButton>
            </Tooltip>

          </Badge>
        </Grid>

        {/* Profile Icon */}
        <Grid item xs={1} sm={1}>
          <Tooltip title="Profile">
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>
        </Grid>

        {/* Month Selector */}

      </Grid>
      <Select
        onChange={onDateChange}
      // defaultValue="January"
      // fullWidth
      // style={{ marginRight: '15px' }}
      >
        <MenuItem value="January">January</MenuItem>
        <MenuItem value="February">February</MenuItem>
        {/* Add more months */}
      </Select>
    </div>
  );
};

export default TopBar;
