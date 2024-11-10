// components/ArchiveCourses.js
import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Notyf } from 'notyf';

const ArchiveCourses = ({ courseId, isActive, fetchData }) => {
    // console.log(courseId, isActive);
    const notyf = new Notyf();

    const archiveToggle = () => {
        fetch(`http://localhost:4000/courses/${courseId}/archive`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                notyf.success('Successfully Archived ');
            } else {
                notyf.error(data.message || 'Error archiving course');
            }
            fetchData();
        })
        .catch(error => notyf.error('An error occurred'));
    };

    const activateToggle = () => {
        fetch(`http://localhost:4000/courses/${courseId}/activate`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                notyf.success('Successfully Activated ');
            } else {
                notyf.error(data.message || 'Error activating course');
            }
            fetchData();
        })
        .catch(error => notyf.error('An error occurred'));
    };

    return (
        <Button 
            variant={isActive ? 'danger' : 'success'} 
            onClick={isActive ? archiveToggle : activateToggle}
            size="sm" className="ms-2"
        >
            {isActive ? 'Archive' : 'Activate'}
        </Button>
    );
};

ArchiveCourses.propTypes = {
    courseId: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    fetchData: PropTypes.func.isRequired
};

export default ArchiveCourses;
