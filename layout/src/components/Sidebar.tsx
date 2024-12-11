import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignOutMutation } from "auth/redux/auth.api";


const Sidebar: React.FC = () => {
    const [logout] = useSignOutMutation()
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const navigate = useNavigate()

    const toggleSidebar = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-light"
            style={{
                width: isOpen ? '250px' : '0',
                height: '100vh',
                transition: 'all 0.3s ease',
                boxShadow: isOpen ? '2px 0 5px rgba(0, 0, 0, 0.3)' : 'none',
                overflow: 'hidden',
            }}
        >
            <button
                className="btn"
                style={{ position: 'absolute', left: isOpen ? '200px' : '0px', zIndex: 1000, fontWeight: "bold" }}
                onClick={toggleSidebar}
            >

                {isOpen ? 'x' : '>'}
            </button>


            {isOpen && (
                <>
                    <Link
                        to="/"
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
                    >
                        <span className="fs-4">My App</span>
                    </Link>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link link-dark">
                                DashBoard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="product" className="nav-link link-dark">
                                All Products
                            </Link>
                        </li>

                        <button onClick={() => {
                            logout()
                            navigate("/auth")
                        }} className='btn btn-primary'>Logout</button>

                    </ul>
                </>
            )}
        </div>
    );
};

export default Sidebar;