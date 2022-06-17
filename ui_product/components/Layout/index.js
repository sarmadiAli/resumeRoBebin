import React from 'react'
import Header from './Header'
import Main from './Main'

export default function Layout(props) {
  return (
    <>
        <Header />
        <Main>
            {props.children}
        </Main>
        
    </>
  )
}
