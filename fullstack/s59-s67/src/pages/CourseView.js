// pages/CourseView.js
import { useState, useEffect, useContext} from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Notyf } from 'notyf';

export default function CourseView() {

	const { courseId } = useParams();

	const {user} = useContext(UserContext);

	const navigate = useNavigate();
	const notyf = new Notyf();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

	useEffect(() => {

	    fetch(`http://localhost:4000/courses/specific/${courseId}`)
	        .then(res => res.json())
	        .then(data => {

	            setName(data.name);
	            setDescription(data.description);
	            setPrice(data.price);
	        })
	}, [courseId])

	function enroll(courseId) {
	    fetch('http://localhost:4000/users/enroll', {
	        method: 'POST',
	        headers: {
	            'Content-Type': 'application/json',
	            Authorization: `Bearer ${localStorage.getItem('token')}`
	        },
	        body: JSON.stringify({
	            enrolledCourses: [ {courseId} ],
	            totalPrice: price
	        })
	    })
	    .then(res => res.json())
	    .then(data => {

	        if (data.message === 'Admin is forbidden') {
				notyf.error('Admin Forbidden');
			} else if (data.message === 'Enrolled successfully') {
				notyf.success('Enrollment successful');
				navigate('/courses');
			} else {
				notyf.error('Internal Server Error. Notify System Admin');
			}
	    })
	}	

    return (
        <Row>
            <Col lg={{ span: 6, offset: 3 }}>
                <Card>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle>Description: </Card.Subtitle>
                        <Card.Text>{description}</Card.Text>
                        <Card.Subtitle>Price:</Card.Subtitle>
                        <Card.Text>PhP {price}</Card.Text>
                    	{
                    		user.id !== null ?
                    	<>
                        <Button variant="primary" onClick={() => enroll(courseId)}>Enroll</Button>
                        <Link className="btn btn-danger ms-2" to="/courses">Back</Link>
                        </>
                        :
						<>
                        <Link className="btn btn-danger" to="/login">Login</Link>
                        <Link className="btn btn-danger ms-2" to="/courses">Back</Link>
                        </>
                        }
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}