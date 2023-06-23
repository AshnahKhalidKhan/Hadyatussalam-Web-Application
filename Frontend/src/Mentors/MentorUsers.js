import React, { useState } from 'react';
import MNavbar from './MNavbar';
import Header from '../Users/Header';
import Footer from '../Users/Footer';

const MentorUsers = () => {
  // Hardcoded users
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    //...add more users as needed
  ]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserChange = (event) => {
    const userId = event.target.value;
    const user = users.find(u => u.id === Number(userId));
    setSelectedUser(user);
  };

  const handleDeleteUser = () => {
    setUsers(users.filter(u => u.id !== selectedUser.id));
    setSelectedUser(null);
    // Send an email to the deleted user
    console.log(`User with ID ${selectedUser.id} has been removed`);
  };

  return (
    <>
    <Header />
      <MNavbar />
      <h1>Mentor Page</h1>
      <div>
        <select onChange={handleUserChange} value={selectedUser?.id || ''}>
          <option value="">Select user...</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name} ({user.id})
            </option>
          ))}
        </select>
        {selectedUser && <button onClick={handleDeleteUser}>Delete Selected User</button>}
      </div>

      {selectedUser && (
        <div>
          <h2>{selectedUser.name}'s habits</h2>
          {/* Render the user's habits here */}
        </div>
      )}
    <Footer />
    </>
  );
};

export default MentorUsers;
