import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchDropdown: false
}

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setSearchDropdown: (state, action) => {
            state.searchDropdown = action.payload;
        },
    }
})

export const { setSearchDropdown } = popupSlice.actions;
export default popupSlice.reducer;