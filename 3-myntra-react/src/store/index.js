import {configureStore} from '@reduxjs/toolkit'
import bagItemSlice from './bagItemSlice'
import fetchDataSlice from './fetchDataSlice'
import itemsSlice from './itemSlice'
const myntraStore = configureStore({reducer:{
    items : itemsSlice.reducer,
    bagItem : bagItemSlice.reducer,
    fetchData : fetchDataSlice.reducer,
}

})
export default myntraStore