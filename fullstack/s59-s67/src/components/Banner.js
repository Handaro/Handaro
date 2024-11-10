// components/Banner.js
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Banner({ data }) {
    return (
        <Row>
            <Col>
                <h1 className="mt-5 text-center">{data.title}</h1>
                <p className="text-center">{data.content}</p>
                <Link to={data.destination}>
                    <Button className="mx-auto mb-3 d-block" variant="primary">{data.buttonLabel}</Button>
                </Link>
            </Col>
        </Row>
    );
}
