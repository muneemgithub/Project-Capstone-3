
import { configureStore } from "@reduxjs/toolkit";
import Addtocart from "../Slices/AddtoCart"

 const store = configureStore ({
    reducer :{ 
      
        Cart:Addtocart,
    }
})
export default store;