import React from 'react';

const UserContext = React.createContext();

export const UserProvider = UserContext.Provider;
export default UserContext; // I add this to import UserContext directly
