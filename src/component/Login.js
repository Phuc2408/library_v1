// Login.js
import React from 'react';
import '../component/reset.css';
import '../component/base.css';
import '../component/authen.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-left">
                <div className="logo">
                    <img src="../images/loginbg.png" alt="Library Logo" />
                    <h1>Library</h1>
                </div>
                <p className="welcome-message">Welcome back 👋</p>
                <h2>Log in to continue</h2>

                <form className="login-form">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter username" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" />

                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                    </div>

                    <button type="submit" className="btn-continue">Continue</button>
                </form>

                <p className="signup-message">
                    Are you new? <a href="../user/signup.html">GET'S STARTED - IT'S FREE</a>
                </p>
            </div>

            <div className="loginbg">
                <img src="../assets/image/loginbg.png" alt="Books Illustration" />
            </div>
        </div>
    );
};

export default Login;
