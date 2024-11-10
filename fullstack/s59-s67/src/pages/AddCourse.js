// pages/AddCourse.js
import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Notyf } from 'notyf'

export default function AddCourse() {
    
    const notyf = new Notyf();

    const { user } = useContext(UserContext);
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [coursePrice, setCoursePrice] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (courseName && courseDescription && coursePrice) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [courseName, courseDescription, coursePrice]);

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:4000/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                name: courseName,
                description: courseDescription,
                price: coursePrice
            })
        })
        .then(res => res.json())
        .then(data => {

            if (data.message === 'Course added successfully') {
                notyf.success('Course Added');
                setCourseName('');                
                setCourseDescription('');                
                setCoursePrice('');
                setRedirect(true);
            }else if (data.message === 'Course already exists') {
                notyf.error('Course Already Exists');
                setCourseName('');                
                setCourseDescription('');                
                setCoursePrice('');
            } else if (data.message === 'Failed to save the course') {
                notyf.error('Unsuccessful Course Creation');
                setCourseName('');                
                setCourseDescription('');                
                setCoursePrice('');
            } else {
                notyf.error('Unsuccessful Course Creation');
                setCourseName('');                
                setCourseDescription('');                
                setCoursePrice('');
            }
        });
    }

    if (!user.isAdmin) {
        return <Navigate to="/courses" />;
    }

    if (redirect) {
        return <Navigate to="/courses" />;
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h1 className="my-5 text-center">Add Course</h1>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter description" value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price" value={coursePrice} onChange={(e) => setCoursePrice(e.target.value)} required />
            </Form.Group>
            { isActive ? 
                    <Button variant="primary" type="submit">Submit</Button>
                    : 
                    <Button variant="danger" type="submit"disabled>Submit</Button>
            }
        </Form>
    );
}
