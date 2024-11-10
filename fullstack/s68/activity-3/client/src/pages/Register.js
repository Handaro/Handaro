import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext'; // Ensure you import UserContext

export default function Register() {
    const { user } = useContext(UserContext);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [redirect, setRedirect] = useState(false); // State to handle redirection after registration

    useEffect(() => {
        // Check if all fields are filled and passwords match
        setIsActive(email !== "" && password !== "" && confirmPassword !== "" && password === confirmPassword);
    }, [email, password, confirmPassword]);

    function registerUser(e) {
        e.preventDefault();

        fetch('http://localhost:4000/users/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (data.message === "Registered Successfully") {
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                Swal.fire({
                    title: "Registration Successful",
                    icon: "success",
                    text: "Thank you for registering!"
                });
                setRedirect(true); // Set redirect to true after successful registration
            } else {
                Swal.fire({
                    title: "Registration Failed",
                    icon: "error",
                    text: data.message || "An error occurred. Please try again."
                });
            }
        })
        .catch(error => {
            console.error('Error during registration:', error);
            Swal.fire({
                title: "Registration Error",
                icon: "error",
                text: "An error occurred. Please try again."
            });
        });
    }

    // Redirect if the user is logged in
    if (user.id) {
        return <Navigate to="/" />; // Redirect to home if already logged in
    }

    return (
        <Form onSubmit={registerUser}>
            <h1 className="my-5 text-center">Register</h1>
            <Form.Group controlId="userEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control 
                    type="email"
                    placeholder="Enter Email" 
                    required 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="userPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Enter Password" 
                    required 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Confirm Password" 
                    required 
                    value={confirmPassword} 
                    onChange={e => setConfirmPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!isActive}>
                Submit
            </Button>
        </Form>
    );
}
