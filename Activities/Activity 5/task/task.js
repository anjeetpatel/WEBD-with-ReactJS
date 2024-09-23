import React, { useState, useEffect } from 'react';

// Modal Component
const Modal = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <div style={modalStyles}>
            <div style={modalContentStyles}>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Address: {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

// Styles for Modal
const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const modalContentStyles = {
    background: 'white',
    padding: '20px',
    borderRadius: '5px',
};

export default function User() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('name'); // Default sorting by name
    const [selectedUser, setSelectedUser] = useState(null); // State for selected user

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const api = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!api.ok) {
                    throw new Error("Network Error");
                }
                const data = await api.json();
                setUsers(data); // Set all users
            } catch (err) {
                setError(err.message); // Set error state
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    // Filter users based on search term
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort users based on selected option
    const sortedUsers = filteredUsers.sort((a, b) => {
        if (sortOption === 'name') {
            return a.name.localeCompare(b.name);
        } else {
            return a.email.localeCompare(b.email);
        }
    });

    // Handle user click to open modal
    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    // Close modal
    const handleCloseModal = () => {
        setSelectedUser(null);
    };

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="name">Sort by Name</option>
                <option value="email">Sort by Email</option>
            </select>
            {sortedUsers.length > 0 ? (
                <div>
                    {sortedUsers.map((user) => (
                        <div key={user.id} onClick={() => handleUserClick(user)} style={{ cursor: 'pointer' }}>
                            <h2>{user.name}</h2>
                            <p>Email: {user.email}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No users found.</p>
            )}
            <Modal user={selectedUser} onClose={handleCloseModal} />
        </>
    );
}
