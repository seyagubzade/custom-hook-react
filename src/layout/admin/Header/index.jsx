import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Admin Panel
      </Typography>
      <Button component={Link} to="/" style={{color:"#fff", marginRight:"16px"}} >
        Home
      </Button>
      <Button component={Link} to="/admin/add-new" style={{color:"#fff"}}>
        Add Product
      </Button>
    </Toolbar>
  </AppBar>
  )
}

export default AdminHeader