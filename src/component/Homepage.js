import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import BookSection from './BookSection';
import Footer from './Footer';

const Homepage = () => {
    return (
        <div className="page-container">
            <Sidebar />
            <div className="main-content">
                <Header />
                <BookSection />
                <Footer />
            </div>
        </div>
    );
};

export default Homepage;
