import React, { useState } from 'react'
import { useAddProductMutation, useGetProductsQuery } from '../redux/product.api'

const Product = () => {
    const [productData, setProductData] = useState({})
    const [addProduct] = useAddProductMutation()
    const { data } = useGetProductsQuery()

    return <>
        <div className="container mt-5 ">
            <div className='text-end'>
                <button className='btn btn-primary'
                    data-bs-toggle="modal" data-bs-target="#productModal">+Add Product</button>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.result?.length ? (
                                data.result.map((item, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.desc}</td>
                                        <td>
                                            <img src={item.image} height="40" width="40" alt="" />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5}>No products available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

        {/* Modal */}
        <div className="modal fade" id="productModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='my-2'>
                            <input type="text"
                                onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                                className='form-control' placeholder='Enter Product' />
                        </div>
                        <div className='my-2'>
                            <input type="text"
                                onChange={(e) => setProductData({ ...productData, desc: e.target.value })}
                                className='form-control' placeholder='Enter Description' />
                        </div>
                        <div className='my-2'>
                            <input type="text"
                                onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                                className='form-control' placeholder='Enter Price' />
                        </div>
                        <div className='my-2'>
                            <input type="text"
                                onChange={(e) => setProductData({ ...productData, image: e.target.value })}
                                className='form-control' placeholder='Enter Image URL' />
                        </div>

                        <button
                            onClick={() => addProduct(productData)}
                            className='btn btn-primary w-100 mt-3'>Add Product</button>
                    </div>
                </div>
            </div>
        </div >

    </>
}

export default Product