import React from 'react'
import AppleImg from "../../Assests/ApplesImage.webp"
import BlueberriesImg from "../../Assests/blueberriesImage.webp"
import ClementinesImg from "../../Assests/clementinesImage.webp"
import DatesImg from "../../Assests/DatesImage.webp"
import GreenBeansImg from "../../Assests/GreenBeansImage.webp"
import MangoesImg from "../../Assests/MangoesImage.webp"
import PearsImg from "../../Assests/pearsImages.webp"
import RedCherriesImg from "../../Assests/RedCherriesImage.webp"
import StrawberryImg from "../../Assests/strawberryImage.webp"
import BabySpinachImg from "../../Assests/BabySpinachImage.webp"
import BrusselsSproutsImg from "../../Assests/BrusselsSproutsImage.webp"
import CornImg from "../../Assests/CornImage.webp"
import CucumberImg from "../../Assests/CucumberImage.webp"
import GreenbeansImg from "../../Assests/GreenBeansImage.webp"
import GreenLimesImg from "../../Assests/GreenLimesImage.webp"
import MiniPeppersImg from "../../Assests/MiniPeppersImage.webp"
import PeeledCarrotsImg from "../../Assests/Peeled-CarrotsImage.webp"
import VeggiePlatterImg from "../../Assests/VeggiePlatterImage.webp"
import YellowLimesImg from "../../Assests/Yellow-LimesImage.webp"
import SignatureSalmonImg from "../../Assests/SignatureSalmonImage.webp"
import CodfilletImg from "../../Assests/codfilletImage.webp"
import SwordfishImg from "../../Assests/swordfishImage.webp"
import HalibutImg from "../../Assests/halibutImage.webp"
import TilapiaFilletImg from "../../Assests/TilapiaFilletImage.webp"
import BeefImg from "../../Assests/beefImage.webp"
import SlicedturkeybreastImg from "../../Assests/sliced_turkey_breastImage.webp"
import ChickenthighImg from "../../Assests/chicken_thighimage.webp"
import ChickenbrestImg from "../../Assests/chicken_brestImage.webp"
import StickImg from "../../Assests/steakImage.webp"
import { Box,  Button,  Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const dummydata = [
    {
        id:  1,
        name: "Apples",
        Image: AppleImg,
        Price: 1.60,
    },
    {
        id:  2,
        name: "Blueberries",
        Image: BlueberriesImg,
        Price: 3.00,
    },
    {
        id:  3,
        name: "Clementines",
        Image: ClementinesImg,
        Price: 2.50,
    },
    {
        id:  4,
        name: "Dates",
        Image: DatesImg,
        Price: 8.00,
    },
    {
        id:  5,
        name: "GreenBeans",
        Image: GreenBeansImg,
        Price: 1.20,
    },
    {
        id:  6,
        name: "Mangoes",
        Image: MangoesImg,
        Price: 2.50,
    },
    {
        id:  7,
        name: "Pears",
        Image: PearsImg,
        Price: 3.50,
    },
    {
        id:  8,
        name: "RedCherries",
        Image: RedCherriesImg,
        Price: 1.80,
    },
    {
        id:  9,
        name: "Strawberry",
        Image: StrawberryImg,
        Price: 8.00,
    },
    {
        id:  10,
        name: "BabySpinach",
        Image: BabySpinachImg,
        Price: 0.60,
    },
    {
        id:  11,
        name: "BrusselsSprouts",
        Image: BrusselsSproutsImg,
        Price: 0.60,
    },
    {
        id:  12,
        name: "Corn",
        Image: CornImg,
        Price: 4.00,
    },
    {
        id:  13,
        name: "Cucumber",
        Image: CucumberImg,
        Price: 4.00,
    },
    {
        id:  14,
        name: "Greenbeans",
        Image: GreenbeansImg,
        Price: 4.00,
    },
    {
        id:  15,
        name: "GreenLimes",
        Image: GreenLimesImg,
        Price: 1.50,
    },
    {
        id:  16,
        name: "MiniPeppers",
        Image: MiniPeppersImg,
        Price: 5.00,
    },
    {
        id:  17,
        name: "PeeledCarrots",
        Image: PeeledCarrotsImg,
        Price: 2.20,
    },
    {
        id:  18,
        name: "VeggiePlatter",
        Image: VeggiePlatterImg,
        Price: 3.20,
    },
    {
        id:  19,
        name: "YellowLimes",
        Image: YellowLimesImg,
        Price: 1.20,
    },
    {
        id:  20,
        name: "SignatureSalmon",
        Image: SignatureSalmonImg,
        Price: 4.95,
    },
    {
        id:  21,
        name: "Codfillet",
        Image: CodfilletImg,
        Price: 7.50,
    },
    {
        id:  22,
        name: "Swordfish",
        Image: SwordfishImg,
        Price: 7.50,
    },
    {
        id:  23,
        name: "Halibut",
        Image: HalibutImg,
        Price: 12.00,
    },
    {
        id:  24,
        name: "TilapiaFillet",
        Image: TilapiaFilletImg,
        Price: 7.89,
    },
    {
        id:  25,
        name: "Beef",
        Image: BeefImg,
        Price: 6.00,
    },
    {
        id:  26,
        name: "Slicedturkeybreast",
        Image: SlicedturkeybreastImg,
        Price: 7.50,
    },
    {
        id:  27,
        name: "Chickenthigh",
        Image: ChickenthighImg,
        Price: 7.89,
    },
    {
        id:  28,
        name: "Chickenbrest",
        Image: ChickenbrestImg,
        Price: 9.00,
    },
    {
        id:  29,
        name: "StickImg",
        Image: StickImg,
        Price: 12.00,
    }
]
const Products = () => {
  return (

    <>
      {
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between", marginTop: 20 }}>
      {dummydata.map((item) => (
        <Box
          key={item.id}
          style={{
            width: "270px",
            height: "400px",
            textAlign: "center",
            background: "white",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
            padding: "16px",
            border: "1px solid #ddd",
          }}
        >
          <img
            src={item.Image}
            alt={item.name}
            style={{ width: "100%", height: "auto", borderRadius: "5px" }}
          />
          <Typography style={{ fontWeight: "bold", marginTop: "8px" }}>
            {item.name}
          </Typography>
          <Typography
            style={{
              color: "green",
              fontWeight: "bold",
              margin: "8px 0",
            }}
          >
            ${item.Price}
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            startIcon={<ShoppingCartIcon />}
          >
            Add to Cart
          </Button>
        </Box>
      ))}
    </div>
     
      

        
      }
    </>
  )
}

export default Products;