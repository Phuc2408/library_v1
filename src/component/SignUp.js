// Signup.js
import React from 'react';
import '../css/authen.css'; // Assuming you have an authen.css file

const Signup = () => {
    return (
        <div className="signup-container">
            <div className="signup-left">
                <div className="logo">
                    <img src="../assets/image/logo.png" alt="Library Logo" />
                    <h1>Library</h1>
                </div>
                <h2>Create your account</h2>

                <form className="signup-form">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter email" />

                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter username" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" />

                    <button type="submit" className="btn-continue">Continue</button>
                </form>

                <p className="login-message">
                    Already a Member? <a href="../user/signin.html">LOG IN</a>
                </p>
            </div>

            <div className="loginbg">
                <img src="../assets/image/loginbg.png" alt="Books Illustration" />
            </div>
        </div>
    );
};

export default Signup;
