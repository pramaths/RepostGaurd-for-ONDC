import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Filter  = () => {
  const [users, setUsers] = useState([]);
  const [platform, setPlatform] = useState('amazon');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/users/platform/${platform}`);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [platform]);

  return (
    <div>
      <h1>User List</h1>
      <div>
        <label htmlFor="platform">Select Platform: </label>
        <select
          id="platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="amazon">Amazon</option>
          <option value="flipkart">Flipkart</option>
          <option value="myntra">Myntra</option>
          {/* Add more platform options as needed */}
        </select>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.email}>
            <p>Email: {user.email}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            <p>Product Type: {user.productType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
