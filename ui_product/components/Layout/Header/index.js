import { AppBar, Toolbar } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Link
          
            href={{
              pathname: '/'
            }}>
            <a>Send Email</a>
          </Link>
          <Link
            href={{
              pathname: '/list'
            }}>
            <a style={{marginRight:'40px'}}>resume List</a>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
}
