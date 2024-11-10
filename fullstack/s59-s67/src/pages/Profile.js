import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import notyf from 'notyf'; // Assuming Notyf is for notifications
import UpdateProfile from './UpdateProfile'; // Import the new UpdateProfile component

const Profile = () => {
  const { user, token } = useContext(UserContext); // Assuming user and token from context
  const navigate = useNavigate();

  const handleProfileUpdateSuccess = () => {
    notyf.success('Profile updated successfully');
    navigate('/profile'); // Optionally redirect or handle post-update logic
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user?.firstName} {user?.lastName}</p>
      <p>Mobile: {user?.mobileNo}</p>

      <UpdateProfile
        initialFirstName={user?.firstName}
        initialLastName={user?.lastName}
        initialMobileNo={user?.mobileNo}
        token={token}
        onSuccess={handleProfileUpdateSuccess} // Pass success handler
      />
    </div>
  );
};

export default Profile;
