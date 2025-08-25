import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialState, type LoginResponse } from "../type/type";

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        loginSucess : (state,action:PayloadAction<LoginResponse>) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
            state.isAuthenticated = true;
        }
    }
});

export const {loginSucess} = authSlice.actions;
export default authSlice.reducer;