import { configureStore } from '@reduxjs/toolkit';
import { productApi } from 'product/redux/product.api';
// import { authApi } from 'auth/redux/auth.api';
// import authSlice from 'auth/redux/auth.slice';

const reduxStore = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        // [authApi.reducerPath]: authApi.reducer,
        // auth: authSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch

export default reduxStore;
