import React from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons-ul/Search';

const AdminDashboard = () => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">
          Debate Online
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          Engage in impactful discussions on pressing issues.
        </Typography>
      </Grid>
      <Grid item xs={8} sm={6} md={4}>
        <TextField
          label="Search for a debate topic"
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: (
              <SearchIcon style={{ cursor: 'pointer' }} />
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" size="large" fullWidth>
          Join a Debate
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" color="primary" size="large" fullWidth>
          Create a Debate
        </Button>
      </Grid>
      <Grid item xs={12} style={{ marginTop: '20px' }}>
        <Typography variant="body1" align="center">
          Browse popular topics:
        </Typography>
        <Typography variant="body2" align="center">
          Climate Change, Education Reform, Artificial Intelligence, etc.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
