// Sidebar.js
import React from 'react';
import '../css/home.css';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src="../images/logo.png" alt="Library Logo" />
                <h2>Library</h2>
            </div>
            <ul className="sidebar-nav">
                <li><a href="#" className="active"><span className="icon"><i className="fas fa-book"></i></span> Catalog</a></li>
                <li><a href="#"><span className="icon"><i className="fas fa-history"></i></span> History</a></li>
                <li><a href="#"><span className="icon"><i className="fas fa-user"></i></span> Account</a></li>
                <li><a href="#"><span className="icon"><i className="fas fa-cogs"></i></span> Rules</a></li>
                <li><a href="#"><span className="icon"><i className="fas fa-door-open"></i></span> Log out</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
