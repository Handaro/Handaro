// pages/Courses.js
import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import AdminView from '../components/AdminView';
import UserView from '../components/UserView';

export default function Courses() {
    const { user } = useContext(UserContext);
    
    const [courses, setCourses] = useState([]);

    useEffect(() => {

        let fetchURL = user.isAdmin ? 'http://localhost:4000/courses/all' :
            'http://localhost:4000/courses/';

        fetch(fetchURL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
            .then(res => res.json())
            .then(data => { 

                setCourses(data)
        })
    }, []);

    const fetchData = () => {

        let fetchURL = user.isAdmin ? 'http://localhost:4000/courses/all' :
            'http://localhost:4000/courses/';

        fetch(fetchURL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
            .then(res => res.json())
            .then(data => { 

                setCourses(data)
        })
    };

    useEffect(() => {

        fetchData();

    }, [])

    return (
        <div>
            <h1>Courses</h1>
            {user.isAdmin ? (
                <AdminView coursesData={courses} fetchData={fetchData}/>
            ) : (
                <UserView coursesData={courses} />
            )}
        </div>
    );
}

