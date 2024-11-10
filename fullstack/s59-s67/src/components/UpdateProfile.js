import React, { useState } from 'react';

const UpdateProfile = ({ initialFirstName, initialLastName, initialMobileNo, token, onSuccess }) => {
  const [firstName, setFirstName] = useState(initialFirstName || '');
  const [lastName, setLastName] = useState(initialLastName || '');
  const [mobileNo, setMobileNo] = useState(initialMobileNo || '');

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/profile/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Token for authentication
        },
        body: JSON.stringify({ firstName, lastName, mobileNo }),
      });

      const data = await response.json();
      if (response.ok) {
        onSuccess(); // Call the parent success handler
      } else {
        console.error(data.message || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mobileNo">Mobile Number</label>
          <input
            id="mobileNo"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
