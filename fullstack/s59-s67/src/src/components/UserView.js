// components/UserView.js
import React from 'react';
import CourseCard from './CourseCard';
import CourseSearch from './CourseSearch'

const UserView = ({ coursesData }) => {
    return (
        <>
            <CourseSearch />
            {coursesData.map((course) => (
                <CourseCard key={course._id} courseProp={course} />
            ))}
        </>
    );
}

export default UserView;
