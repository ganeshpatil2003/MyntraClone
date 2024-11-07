import { createSlice } from "@reduxjs/toolkit";
import { default_value } from "./Default";

const itemsSlice = createSlice({
    name : 'items',
    initialState : [],
    reducers:{
        addInitialData : (state,action) => {
            return action.payload;
        }
    }
})
export default itemsSlice;

export const itemsActions = itemsSlice.actions