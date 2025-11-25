import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    darkmode: false,
    usersData: [],
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setDarkmode: (state) => {
            state.darkmode = !state.darkmode;
        },
        setUsers: (state, action) => {
            state.usersData = action.payload;
        },
    }
})

export const { setUsers , setDarkmode } = userSlice.actions;
export default userSlice.reducer;