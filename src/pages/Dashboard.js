import React from 'react';
import Content from '../components/HOC/Content'

function Dashboard() {
    return (
        <div className="main-content-container">
            <div className="dash-box">
                <h1>0</h1>
                <p>PRODUCTS</p>
            </div>
            <div className="dash-box">
                <h1>0</h1>
                <p>EMPLOYEES</p>
            </div>
            <div className="dash-box">
                <h1>0</h1>
                <p>CUSTOMERS</p>
            </div>
            <div className="dash-box">
                <h1>0</h1>
                <p>ORDERS</p>
            </div>
            <div className="dash-box">
                <h1>0</h1>
                <p>DEALS</p>
            </div>
            <div className="dash-box">
                <h1>0</h1>
                <p>INVENTORY</p>
            </div>
        </div>
    )
}

export default Content(Dashboard)
