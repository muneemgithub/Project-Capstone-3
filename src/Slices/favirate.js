
import { createSlice } from "@reduxjs/toolkit";


export const FavirateSlice = createSlice({
    name: "Favirate",
    initialState: {
        Favire: [],
    },

    reducers: {
        faviratecard: (state, action) => {
          console.log(action,"action");
          
            
            const Have = state.Favire.find((item) => item.
                id
                === action.payload.
                    id
            )
           
            if (Have) {
                // IsExies.quanitity += 1
                state.Favire.push({ ...action.payload })
            } 
                
               
            
        },

     
     
    },
})


export const { faviratecard } = FavirateSlice.actions;

export default FavirateSlice.reducer;