import { createSlice } from "@reduxjs/toolkit";
const bagItemSlice = createSlice({
    name : 'bagItem',
    initialState : [],
    reducers: {
        addItem : (state,action) => {
            state.push(action.payload);
        },
        removeItem : (state,action) => {
            return state.filter((item) => item !== action.payload)
        }
    }
})

export default bagItemSlice

export const bagItemActions = bagItemSlice.actions