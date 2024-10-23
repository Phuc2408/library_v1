// Login.js
import React, { useState } from "react";
import '../css/reset.css';
import '../css/base.css';
import '../css/authen.css';
import logo from "../images/logo.png";
import loginbg from "../images/loginbg.png";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Signup from "./SignUp";
export default function Login() {
    const [showLogin, setShowLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleSignupClick = () => {
        setShowLogin(false);
    };

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    async function login(ev) {
        ev.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3001/api/login",
                { username, password },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            if (response.status === 200) {
                localStorage.setItem("username", username); // Lưu tên người dùng vào localStorage
                setRedirect(true);
                alert("Login successful");
            } else {
                alert("Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("Login failed");
        }
    }

    if (redirect) {
        return <Navigate to="/home" />;
    }

    return (
        <div className="login-container">
            <div className="login-left">
                <div className="logo">
                    <img src={logo} alt="Library Logo" /> {/* Sử dụng biến logo */}
                    <h1>Library</h1>
                </div>
                <p className="welcome-message">Welcome back 👋</p>
                <h2>Log in to continue</h2>

                {showLogin ? (
                    <form className="login-form" onSubmit={login}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter username"
                            value={username}
                            onChange={(ev) => setUsername(ev.target.value)}
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />

                        <div className="form-options">
                            <label className="remember-me">
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#" className="forgot-password">
                                Forgot Password?
                            </a>
                        </div>

                        <button type="submit" className="btn-continue">
                            Continue
                        </button>
                    </form>
                ) : (
                    <Signup onLoginClick={handleLoginClick} />
                )}

                <p className="signup-message">
                    Are you new?{" "}
                    <a href="/signup">GET'S STARTED - IT'S FREE</a>
                </p>
            </div>

            <div className="loginbg">
                <img src={loginbg} alt="Books Illustration" />
            </div>
        </div>
    );
}

