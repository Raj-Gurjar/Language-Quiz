import React, { useState } from 'react';
import '../styles/signup.scss';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can store the data in your dataset or make an API call to store it.

        // For demonstration purposes, let's log the form data and display it.
        console.log(formData);
        setSubmittedData(formData);
    };

    return (
        <section className='signup_cls section_padding'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>

            {submittedData && (
                <div className="submitted-data">
                    <h3>Submitted Data:</h3>
                    <p>Username: {submittedData.username}</p>
                    <p>Email: {submittedData.email}</p>
                    <p>Password: {submittedData.password}</p>
                </div>
            )}
            <p>Already have an account? <Link to="/signin">Sign In</Link></p>
        </section>

    );
};

export default SignUp;
