// pages/Courses.js
import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import AdminView from '../components/AdminView';
import UserView from '../components/UserView';
import SearchCourseByPrice from '../components/SearchCourseByPrice'; // Import the new component

export default function Courses() {
    const { user } = useContext(UserContext);
    const [courses, setCourses] = useState([]); // This stores all courses
    const [searchResults, setSearchResults] = useState([]); // This stores the search results
    const [searchMode, setSearchMode] = useState(false); // To track if the user is in search mode or not

    // Fetch all courses (admin or user-specific) on component mount
    useEffect(() => {
        let fetchURL = user.isAdmin ? 'http://localhost:4000/courses/all' : 'http://localhost:4000/courses/';
        fetch(fetchURL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
            .then(res => res.json())
            .then(data => {
                setCourses(data);
            });
    }, [user.isAdmin]);

    // Function to handle search results
    const handleSearchResults = (results) => {
        setSearchResults(results);
        setSearchMode(true); // Enter search mode when there are search results
    };

    // Reset search mode when needed
    const handleResetSearch = () => {
        setSearchMode(false);
        setSearchResults([]); // Clear the search results
    };

    return (
        <div>
            <h1>Courses</h1>
            
            {/* Search Courses by Price Range component */}
            <SearchCourseByPrice
                token={localStorage.getItem('token')} // Pass the user's token to the component
                onSearchResults={handleSearchResults} // Handle the search results
            />

            {searchMode && (
                <div>
                    <h2>Search Results:</h2>
                    {searchResults.length > 0 ? (
                        <ul>
                            {searchResults.map(course => (
                                <li key={course._id}>
                                    {course.name} - ${course.price}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No courses found in this price range.</p>
                    )}
                    <button onClick={handleResetSearch}>Reset Search</button>
                </div>
            )}

            {/* Conditionally render AdminView or UserView based on whether the user is an admin */}
            {user.isAdmin ? (
                <AdminView coursesData={searchMode ? searchResults : courses} fetchData={() => {}} />
            ) : (
                <UserView coursesData={searchMode ? searchResults : courses} />
            )}
        </div>
    );
}
