import { Container, Grid } from '@mui/material'
import React from 'react'

export default function Main({ children }) {
  return (
    <Grid container>
      <Container>
      {children}
      </Container>
    </Grid>
    )
}
