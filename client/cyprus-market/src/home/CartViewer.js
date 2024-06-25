import React from 'react'
import styled from 'styled-components'


function CartViewer() {
  return (
    <Container>
        <Img src="/images/productStarCoffee.webp" alt=""/>
        <A1 href="/"><b>home</b></A1>
        <A2 href="/"><b></b></A2>
      <CartBorder><Cart>CART</Cart></CartBorder>
    <Details><b style={{'position': 'relative', 'right': '400px', 'top': '20px'}}>Details :</b></Details>
    </Container>
  )
}

export default CartViewer

const Container = styled.div`

background-color: blue;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
   height: 890px;
`

const A1 = styled.a`
position: relative;
top: -420px;
right: 1000px;
color: black;
`
const A2 =styled.a`
position: relative;
top: -420px;
right: 900px;
color: black;
`


const Cart=styled.b`
position: relative;
top:20px;
color: black;
border-radius: 40px;
background-color: blue;
`
const CartBorder= styled.div`
position: relative;
top: -340px;
left: 990px;
   width: 350px; 
    height: 470px; 
    border: 4px solid #000; 
border-color: black;
border-radius: 40px;
background-color: blue;
`

const Img = styled.img`
position: relative;
top: 50px;
right: 220px;
height: 450px;
width: 840px;
border-radius: 40px;
`

const Details = styled.div`
position: relative;
top: -380px;
left: 10px;
border-radius: 40px;
border: 4px solid #000;
height: 300px;
width: 950px;
background-color: blue;
color: white;
font-size: 20px;

`