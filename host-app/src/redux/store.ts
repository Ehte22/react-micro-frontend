import { configureStore, Reducer, combineReducers } from '@reduxjs/toolkit';
import authSlice from 'auth/redux/auth.slice';
import { authApi } from 'auth/redux/auth.api';
import { productApi } from 'product/redux/product.api';

const injectedReducers: { [key: string]: Reducer } = {};

const reduxStore = configureStore({
    reducer: combineReducers({
        auth: authSlice
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, productApi.middleware),
});

export const injectReducer = (name: string, reducer: Reducer) => {
    injectedReducers[name] = reducer;
    reduxStore.replaceReducer(
        combineReducers({
            ...injectedReducers,
            auth: authSlice,
        })
    );
};

export const LOAD_AUTH_API = async () => {
    const { authApi } = await import('auth/redux/auth.api');
    const { authSlice } = await import('auth/redux/auth.slice');

    injectReducer(authApi.reducerPath, authApi.reducer);
    injectReducer('auth', authSlice);
};

export const LOAD_PRODUCT_API = async () => {
    const { productApi } = await import('product/redux/product.api');
    injectReducer(productApi.reducerPath, productApi.reducer);
};

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;
