// Book.js
import React from 'react';
import '../css/home.css';
const Book = ({ imgSrc, title, author }) => {
    return (
        <div className="book">
            <img src={imgSrc} alt={`${title} Book Cover`} />
            <h3>{title}</h3>
            <p>{author}</p>
            <button className="btn-view">View Details</button>
            <button className="btn-borrow">Borrow</button>
        </div>
    );
};

export default Book;
