// Login.js
import React, { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Simple authentication check (for demonstration)
        if (email === 'abc@gmail.com' && password === 'password123') {
            // Redirect to homepage
            navigate('/HomePage');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className='login-container' >
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='input-group mt-3'>
                    <label className='me-5'>Email:</label>
                    <input className='input-field'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='input-group mt-3' >
                    <label className='me-3'>Password:</label>
                    <input className='input-field'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='d-flex justify-content-center' >
                <button className='btn-login' type="submit">Login</button></div>
            </form>
        </div>
    );
};

export default Login;
