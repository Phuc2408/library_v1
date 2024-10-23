import React from 'react';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import BookSection from './component/BookSection';
import Footer from './component/Footer';

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
