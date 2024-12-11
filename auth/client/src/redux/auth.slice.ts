import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "../models/auth.interface";
import { authApi } from "./auth.api";

interface InitialState {
    auth: IAuth | null
}

const initialState: InitialState = {
    auth: localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth") as string)
        : null,
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.signIn.matchFulfilled, (state, { payload }) => {
            state.auth = payload.result
        })
        .addMatcher(authApi.endpoints.signOut.matchFulfilled, (state) => {
            state.auth = null
        })

})

export default authSlice.reducer

export type { InitialState };