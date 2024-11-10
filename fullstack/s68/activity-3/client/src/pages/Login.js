import React, { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext'; // Ensure you import UserContext

export default function Login() {
    const { user, setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        // Enable submit button when both fields are populated
        setIsActive(email !== '' && password !== '');
    }, [email, password]);

    function authenticate(e) {
        e.preventDefault();
        
        fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.access) {
                localStorage.setItem('token', data.access);
                retrieveUserDetails(data.access);
                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    text: "Welcome to Zuitt!"
                });
                setRedirect(true); // Set redirect to true on successful login
            } else {
                Swal.fire({
                    title: "Login Failed",
                    icon: "error",
                    text: "Invalid email or password."
                });
            }
        })
        .catch(error => {
            console.error('Error logging in:', error);
            Swal.fire({
                title: "Login Error",
                icon: "error",
                text: "An error occurred. Please try again."
            });
        });

        setEmail('');
        setPassword('');
    }

    const retrieveUserDetails = (token) => {
        fetch('http://localhost:4000/users/details', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setUser({
                id: data.user._id,
                isAdmin: data.user.isAdmin
            });
        });
    };

    // Redirect if the user is logged in
    if (user.id) {
        return <Navigate to="/" />; // Redirect to home if already logged in
    }

    return (
        <Form onSubmit={authenticate}>
            <h1 className="my-5 text-center">Login</h1>
            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant={isActive ? "primary" : "danger"} type="submit" id="submitBtn" disabled={!isActive}>
                Submit
            </Button>
        </Form>
    );
}
