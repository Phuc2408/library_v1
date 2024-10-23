// Header.js
import React from 'react';
import '../css/home.css';
const Header = () => {
    return (
        <header className="header">
            <h1>Welcome to Our Library</h1>
            <p>Featuring a wide collection of books and resources</p>
            <input type="text" placeholder="Search for books..." className="search-bar" />
        </header>
    );
};

export default Header;
