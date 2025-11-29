import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    darkmode: false,
    customerToken: null,
    sellersToken: null,
    adminToken: null,
    loader: false,
    products: [],
    sellersAccounts: []
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setDarkmode: (state) => {
            state.darkmode = !state.darkmode;
        },
        setCustomerToken: (state, action) => {
            state.customerToken = action.payload;
        },
        setSellersToken: (state, action) => {
            state.sellersToken = action.payload;
        },
        setAdminToken: (state, action) => {
            state.adminToken = action.payload;
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

export const { setCustomerToken , setSellersToken , setAdminToken , setDarkmode , setLoader , setProducts , setSellersAccounts } = userSlice.actions;
export default userSlice.reducer;