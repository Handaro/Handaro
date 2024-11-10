// components/CourseCard.js
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CourseCard({ courseProp }) {
    const { name, description, price, _id } = courseProp;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>PhP {price}</Card.Text>
                <Link className="btn btn-primary" to={`/courses/${_id}`}>Details</Link>
            </Card.Body>
        </Card>
    )
}

CourseCard.propTypes = {
    courseProp: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}
