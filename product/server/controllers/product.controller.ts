import { Request, Response } from "express"
import asyncHandler from "express-async-handler"
import { Product } from "../models/Product"

export const addProduct = asyncHandler(async (req: Request, res: Response): Promise<any> => {
    const result = await Product.create(req.body)
    res.status(200).json({ message: "product add successfully", result })
})

export const getProducts = asyncHandler(async (req: Request, res: Response): Promise<any> => {
    const result = await Product.find()
    res.status(200).json({ message: "product fetch successfully", result })
})

export const updateProduct = asyncHandler(async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params
    const result = await Product.findByIdAndUpdate(id, req.body)
    res.status(200).json({ message: "product update successfully", result })
})

export const deleteProduct = asyncHandler(async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params
    const result = await Product.findByIdAndDelete(id)
    res.status(200).json({ message: "product delete successfully", result })
})