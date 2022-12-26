import { ShoppingCart } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="links">
                    <Link to="/"> Shop </Link>
                    <Link to="/contact"> Contact </Link>
                    <Link to="/cart">
                        <ShoppingCart size={32} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;