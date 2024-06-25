import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'


function Home() {


const navigate = useNavigate()

  return (
    <HomeContainer>
      
      
      <A2 href=""><b>Markets</b></A2>
      <A3 href=""><b>Resturants</b></A3>
      <A4 href=""><b>Coffees</b></A4>
      <A5 href=""><b>Catagories</b></A5>
      <Input placeholder="search" />
   
      <Button onClick={() => navigate('/auth')}><b>Login / Sign up</b></Button>
      <CartBorder><Cart>CART</Cart></CartBorder>

    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`

`


const Img = styled.img`

`
const Input = styled.input`
position: relative;
right: 445px;
top: 80px;
width: 450px;
height: 40px;
border-radius: 10px;
border-color: blue;

`
const Button = styled.button`
position: relative;
top: 20px;
left: 200px;
width: 150px;
height: 30px;
background-color: blue;
border-radius: 30px;
border-color: blue;
color: white;
font-size: 15px;
cursor: pointer;
&:hover{
background-color: rgb(90, 90, 250);
border-color: rgb(90, 90, 250);
   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
}
`
const A1 = styled.a`
position: relative;
top: 25px;
right: 145px;
color: black;
`
const A2 = styled.a`
position: relative;
top: 25px;
right: 160px;
color: black;
`

const A3 = styled.a`
position: relative;
top: 25px;
right: 110px;
color: black;
`
const A4 = styled.a`
position: relative;
top: 25px;
right: 60px;
color: black;
`
const A5= styled.a`
position: relative;
top: 25px;
right: 10px;
color: black;
font: bold;
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
top: 150px;
left: 990px;
   width: 350px; 
    height: 470px; 
      border: 4px solid #000; 
border-color: black;
border-radius: 40px;
background-color: blue;
`