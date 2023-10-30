import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import '../styles/signin.scss';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Implement your sign-in logic here
        console.log(`Signing in with username: ${username} and password: ${password}`);
    };

    const handleSignUp = () => {
        // Implement your sign-up logic here
        console.log(`Signing up with username: ${username} and password: ${password}`);
    };

    return (
        <section className='sign_cls section_padding'>
            <div className="form-container">
                <h1>Sign In</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleSignIn}>Sign In</button>
                </form>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </section>
    );
};

export default SignIn;
