import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    darkmode: false,
    sellersData: [],
    loader: false,
    products: [],
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setDarkmode: (state) => {
            state.darkmode = !state.darkmode;
        },
        setSellerData: (state, action) => {
            state.sellersData = action.payload;
        },
        setLoader: (state, action) => {
            state.loader = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    }
})

export const { setSellerData , setDarkmode , setLoader , setProducts } = userSlice.actions;
export default userSlice.reducer;