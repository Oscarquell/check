import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', height: '70vh', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  );
}