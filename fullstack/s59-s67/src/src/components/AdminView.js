// components/AdminView.js
import React from 'react';
import { Table } from 'react-bootstrap';
import EditCourse from './EditCourse';
import ArchiveCourses from './ArchiveCourses';

const AdminView = ({ coursesData, fetchData }) => {
    return (
        <div>
            <h1 className="text-center my-5">Admin Dashboard</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Availability</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {coursesData.map((course) => (
                        <tr key={course._id}>
                            <td>{course._id}</td>
                            <td>{course.name}</td>
                            <td>{course.description}</td>
                            <td>{course.price}</td>
                            <td className={course.isActive ? "text-success" : "text-danger"}>
                                {course.isActive ? "Available" : "Unavailable"}
                            </td>
                            <td>
                                <EditCourse course={course} fetchData={fetchData} />
                                <ArchiveCourses 
                                    courseId={course._id} 
                                    isActive={course.isActive} 
                                    fetchData={fetchData} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default AdminView;
