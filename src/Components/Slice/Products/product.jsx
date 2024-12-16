import React from 'react'
import AppleImg from "../../Assests/ApplesImage.webp"
import { Typography } from '@mui/material'

const dummydata = [
    {
        id:  1,
        name: "Apples",
        Image: AppleImg,
        Price: 1.60,
    }
]
const Products = () => {
  return (

    <>
      {
        dummydata.map((item)=>{
            return(
                <>
                <img src={item.Image} alt="" />
                <Typography>{item.name}</Typography> 
                </>
            )
        }) 

        
      }
    </>
  )
}

export default Products;