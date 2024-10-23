// BookSection.js
import React from 'react';
import Book from './Book';
import '../css/home.css';
const BookSection = () => {
    return (
        <section className="book-section">
            <h2>Popular Books</h2>
            <div className="book-list">
                <Book imgSrc="harry-potter.png" title="Harry Potter and the Sorcerer's Stone" author="J.K. Rowling" />
                <Book imgSrc="another-book.png" title="Another Popular Book" author="Author Name" />
                {/* Add more books as needed */}
            </div>
        </section>
    );
};

export default BookSection;
