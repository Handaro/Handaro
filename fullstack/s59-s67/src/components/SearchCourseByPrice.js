import React, { useState } from 'react';

const SearchCourseByPrice = ({ token, onSearchResults }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/courses/searchByPrice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Authentication token
        },
        body: JSON.stringify({ minPrice, maxPrice }),
      });

      const data = await response.json();
      if (response.ok) {
        onSearchResults(data); // Pass the search results back to the parent component
      } else {
        console.error(data.message || 'Failed to search courses');
      }
    } catch (error) {
      console.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <h2>Search Courses by Price Range</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="minPrice">Min Price</label>
          <input
            id="minPrice"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="maxPrice">Max Price</label>
          <input
            id="maxPrice"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchCourseByPrice;
