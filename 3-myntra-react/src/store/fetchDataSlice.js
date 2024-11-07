import { createSlice } from "@reduxjs/toolkit";

const fetchDataSlice = createSlice({
    name : 'fetchData',
    initialState : {
        fetching : false
    },
    reducers : {
        startFetchData : (state) => {
            state.fetching = true;
        },
        endFetchData : (state) => {
            state.fetching = false;
        }
    }
})

export default fetchDataSlice;

export const fetchDataActions = fetchDataSlice.actions;