
import { configureStore } from "@reduxjs/toolkit";
import Addtocart from "../Slices/AddtoCart"
import  FavirateSlice  from "../Slices/favirate";

 const store = configureStore ({
    reducer :{ 
      
        Cart:Addtocart,
        Favirate:FavirateSlice,
    }
})
export default store;