import { useState } from 'react'
import { GlobalStyle } from './GlobalStyle';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import CardSection from './Components/CardSection'
import Tahani from './Components/Tahani'
import Footer from './Components/Footer'
import styled from 'styled-components'
function App() {
  
const Container= styled.div`
  margin:0;
  row-gap:0px;
`
  return (
     <Container>
      <Navbar/>
      <Hero/>
      <CardSection/>
      <Tahani/>
      <Footer/>
    <GlobalStyle />
      
     </Container>
  )
}

export default App
