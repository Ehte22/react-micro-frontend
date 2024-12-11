import { createSlice } from "@reduxjs/toolkit";

interface InitialState { }

const productSlice = createSlice({
    name: "productSlice",
    initialState: {},
    reducers: {},
    extraReducers: builder => builder


})

export default productSlice.reducer

export type { InitialState }