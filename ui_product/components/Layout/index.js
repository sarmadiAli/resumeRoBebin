import React from 'react'
import Footer from './Footer'
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
