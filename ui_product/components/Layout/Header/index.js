import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <>
   
    <AppBar>
    <Toolbar>
      <Typography   >
        Scroll to see button
      </Typography>
    </Toolbar>
  </AppBar>
  <Toolbar id="back-to-top-anchor" />
    </>
  )
}
