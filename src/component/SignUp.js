import React, { useState } from 'react';
import '../css/authen.css'; // Ensure this file is correctly referenced
import logo from "../images/logo.png";
import loginbg from "../images/loginbg.png";
import { Link, useNavigate } from 'react-router-dom'; // Using Link and Navigate for routing
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // For programmatically navigating

    const handleSignup = async (ev) => {
        ev.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3001/api/signup", // Adjust the signup endpoint if necessary
                { email, username, password },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            if (response.status === 200) {
                alert("Signup successful");
                navigate("/login"); // Redirect to login after successful signup
            } else {
                alert("Signup failed");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("Signup failed");
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-left">
                <div className="logo">
                    <img src={logo} alt="Library Logo" />
                    <h1>Library</h1>
                </div>
                <h2>Create your account</h2>

                <form className="signup-form" onSubmit={handleSignup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                    />

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

                    <button type="submit" className="btn-continue">Continue</button>
                </form>

                <p className="login-message">
                    Already a Member? <Link to="/">LOG IN</Link> {/* Use Link for navigation */}
                </p>
            </div>

            <div className="loginbg">
                <img src={loginbg} alt="Books Illustration" />
            </div>
        </div>
    );
};

export default Signup;
