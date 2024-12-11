import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProduct } from "../models/product.interface"

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/api/v1/auth", credentials: "include" }),
    tagTypes: ["product"],
    endpoints: (builder) => {
        return {
            getProducts: builder.query<{ message: string, result: IProduct[] }, void>({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                transformResponse: (data: { message: string, result: IProduct[] }) => {
                    return data
                },
                providesTags: ["product"],
            }),
            addProduct: builder.mutation({
                query: productData => {
                    return {
                        url: "/add-product",
                        method: "POST",
                        body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),
            updateProduct: builder.mutation({
                query: productData => {
                    return {
                        url: `update-product/${productData._id}`,
                        method: "PUT",
                        body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),
            deleteProduct: builder.mutation({
                query: id => {
                    return {
                        url: `delete-product/${id}`,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["product"]
            }),

        }
    }
})

export const {
    useGetProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApi
