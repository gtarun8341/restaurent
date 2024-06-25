import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function Products() {
  //decalre a useState const
  const [allSignedResturantssData,setAllSignedResturantssData ] = useState({_id: '', name: '', email: '', password: '', confirmPassword: ''})

//   useEffect(() => {
//     fetch('http://localhost:5000/api/endpoints/getAllSignedPublisherData')
//         .then(response => response.json())
//          .then(data => setAllSignedResturantssData(data));
       
//         // data => console.log((data))
// }, []);
  return (
    <AllProducts>

{/* {
(allSignedResturantssData ).map((resturant) => console.log(JSON.stringify(resturant)))
  } */}

    </AllProducts>
  )
}



export default Products


const AllProducts = styled.div`
position: relative;
top: -790px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns :repeat(4, minmax(0, 1fr));
    border: 5px solid #000;
    border-radius: 10px;


`

const Wrap = styled.div`
border-radius: 10px;
cursor: pointer;
overflow: hidden;
border: 3px solid rgba(249, 249, 249, 0.1),
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
img {
    height: 280px;
    width: 280px;
    object-fit: cover;
    border-radius: 30px;
}
&:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
}
`

// border-radius: 10px;
// cursor: pointer;
// overflow: hidden;
// border: 3px solid rgba(249, 249, 249, 0.1),
// rgb(0 0 0 / 73%) 0px 16px 10px -10px;
// transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
// img {
//     height: 100%;
//     width: 100%;
//     object-fit: cover;
// }
// &:hover {
//     transform: scale(1.05);
//     box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
//     rgb(0 0 0 / 72%) 0px 30px 22px -10px;
//     border-color: rgba(249, 249, 249, 0.8);
// }
// `