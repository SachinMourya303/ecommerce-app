import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    darkmode: false,
    sellersToken: null,
    loader: false,
    products: [],
    sellersAccounts: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setDarkmode: (state) => {
            state.darkmode = !state.darkmode;
        },
        setSellersToken: (state, action) => {
            state.sellersToken = action.payload;
        },
        setLoader: (state, action) => {
            state.loader = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setSellersAccounts: (state, action) => {
            state.sellersAccounts = action.payload;
        },
    }
})

export const { setSellersToken , setDarkmode , setLoader , setProducts , setSellersAccounts } = userSlice.actions;
export default userSlice.reducer;