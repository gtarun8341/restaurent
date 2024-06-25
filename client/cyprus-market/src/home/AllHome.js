import React from 'react'
import styled from 'styled-components'
import Home from './Home'
import ImgSlider from './ImgSlider'
import Products from './Products'
import Auth from '../auth/Auth'
function AllHome() {
  return (
    <Container>
      <Home/>
      <ImgSlider/>
      <Products/>
     
    </Container>
  )
}

export default AllHome


const Container = styled.div`
background-color: blue;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
`