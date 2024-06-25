import React from 'react';
import styled from "styled-components";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
let settings = {
    dots : true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll : 1,
    autoplay: true
}
  return (
<ImgSliderContainer>
<BlueBorder/>
<Carousel {...settings}>

    <Wrap>
    <img src="/images/offer5.jpg" alt="" style={{'height': '490px', 'width':'100%',     'object-fit': 'cover'}}/>
    </Wrap>
    <Wrap>
    <img src="/images/offer4.jpg" alt="" style={{'height': '100%', 'width':'100%',     'object-fit': 'cover'}}/>
    </Wrap>
</Carousel>


</ImgSliderContainer>



  )
}

export default ImgSlider
const ImgSliderContainer = styled.div`

`

const BlueBorder = styled.div`
position: relative;
background-color: black;
top: -360px;
height: 550px;
width: 969px;
left: 2px;
border-radius: 40px;

`

const Carousel = styled(Slider)`

position: relative;
top: -905px;
left: 10px;
width: 950px;
height: 500px;
  overflow-x: hidden;
    overflow-y: hidden;
margin-top : 20px;
margin-bottom : 19px;

ul li button{
  &:before{
    font-size: 10px;
    color: white;
  }
}
li.slick-active button::before{
  color : white;
}
.slick-list{
    overflow: visible;
}
button {
  z-index: 1;
};
Wrap {
width: 100%;
height: 100%;
}
border-radius: 40px;

`
const Wrap = styled.div`
cursor: pointer;

img{
  border: 6px solid transparent;
   border-radius: 7px;
    border-color: black;
    height: 100%;
    width: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &: hover{
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
}
`

