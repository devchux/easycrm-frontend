import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png'

function Navbar() {
    useEffect(() => {
        let navbar = document.querySelector('.side-nav');
        navbar.classList.add('display-none')
    },[])
    return (
        <div className="side-nav">
            <div className="logo">
                <div className="logo-container">
                    <img src={logo} alt="company logo" className="company-logo" />
                    <span>GOOGLE</span>
                </div>
                <button className="btn btn-outline-danger cancel-nav">X</button>
            </div>
            <nav>
                <NavLink to="/dashboard"><i className="fa fa-home"></i>   Dashboard</NavLink>
                <NavLink to="/products"><i className="fa fa-shopping-basket"></i> Products</NavLink>
                <NavLink to="/employees"><i className="fa fa-id-badge"></i> Employees</NavLink>
                <NavLink to="/customers"><i className="fa fa-users"></i> Customers</NavLink>
                <NavLink to="/deals"><i className="fa fa-handshake"></i> Deals</NavLink>
                <NavLink to="/leads"><i className="fa fa-inbox"></i>   Leads</NavLink>
                <NavLink to="/inventory"><i className="fa fa-tags"></i> Inventory</NavLink>
                <NavLink to="/maintenance"><i className="fa fa-wrench"></i> Maintenance</NavLink>
                <NavLink to="/message"><i className="fa fa-envelope"></i> Message</NavLink>
                <NavLink to="/credits"><i className="fa fa-credit-card"></i> Credits</NavLink>
                <NavLink to="/debits"><i className="fa fa-book"></i> Debits</NavLink>
                <NavLink to="/invoice"><i className="fa fa-server"></i> Invoice</NavLink>
                <NavLink to="/company"><i className="fa fa-cogs"></i> Company</NavLink>
                <NavLink to="/profile"><i className="fa fa-cog"></i> Profile</NavLink>
            </nav>
    </div>
    )
}

export default Navbar
