import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    darkmode: false,
    customerToken: null,
    sellersToken: null,
    adminToken: null,
    loader: false,
    products: [],
    customerAccounts: [],
    sellersAccounts: [],
    adminAccounts: [],
    filterData: null,
    category: null,
    totalAmount: null,
    carts: [],
    orders: [],
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
        setCustomersAccounts: (state, action) => {
            state.customerAccounts = action.payload;
        },
        setSellersAccounts: (state, action) => {
            state.sellersAccounts = action.payload;
        },
        setAdminAccounts: (state, action) => {
            state.adminAccounts = action.payload;
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setTotalAmount: (state, action) => {
            state.totalAmount = action.payload;
        },
        setCart: (state, action) => {
            state.carts = action.payload;
        },
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
    }
})

export const { setCustomerToken, setSellersToken, setAdminToken, setDarkmode, setLoader, setProducts, setCustomersAccounts, setSellersAccounts, setAdminAccounts , setFilterData , setCategory , setTotalAmount, setCart , setOrders } = userSlice.actions;
export default userSlice.reducer;