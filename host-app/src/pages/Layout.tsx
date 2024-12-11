import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Navbar = React.lazy(() => import("layout/Navbar"))
const Sidebar = React.lazy(() => import("layout/Sidebar"))

const Layout = () => {
    return <>
        <div >
            <Suspense> <Navbar /></Suspense>
            <div className='d-flex'>
                <Suspense> <Sidebar /></Suspense>
                <div className='p-5 w-100'>
                    <Outlet />
                </div>
            </div>
        </div>
    </>
}

export default Layout