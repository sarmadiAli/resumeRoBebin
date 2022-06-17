import React from 'react';
import listData from './coche';
import CardItems from './CardItems';
import { Grid } from '@mui/material';

export default function R_list() {
  return (
    <Grid  container spacing={3}>
      {listData.map((ele) => (
        <CardItems data={ele} key={ele.id}/>
      ))}
    </Grid>
  );
}
