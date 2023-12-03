import React from 'react'
import { Paper, Typography, Container } from '@mui/material';

const AdminFooter = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          This is the Admin footer
        </Typography>
      </Container>
    </Paper>
  )
}

export default AdminFooter