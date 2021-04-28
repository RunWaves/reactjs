import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        info: {},
    },
    reducers: {
        userLoading(state) {
            if (!state.loading) {
                state.loading = true;
            }
        },
        userReceived(state, action) {
            if (state.loading) {
                state.loading = false;
                state.info = action.payload
            }
        },
        logoutUser(state, action) {
            state.info = {};
        }
    },
})

export const {userLoading, userReceived, logoutUser} = userSlice.actions

export default userSlice.reducer