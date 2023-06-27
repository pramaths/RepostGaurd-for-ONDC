// import React, { useState } from 'react';

// const SearchButton = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch(`http://localhost:8000/api/users?email=${searchQuery}`);
//       const data = await response.json();

//       if (data.length > 0) {
//         setUser(data[0]);
//       } else {
//         setUser(null);
//       }
//     } catch (error) {
//       console.log('Error fetching user:', error);
//       setUser(null);
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <h1>Search Users</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter email"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {loading && <p>Loading...</p>}

//       {user && (
//         <div>
//           <h2>User Details</h2>
//           <p>Email: {user.email}</p>
//           <p>Phone Number: {user.phoneNumber}</p>
//           <p>Product Type: {user.productType}</p>
//           <p>Status: {user.status}</p>
//           <p>Reason: {user.reason}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchButton;
import React, { useState } from 'react';

const SearchButton = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:8000/api/users?email=${searchQuery}`);
      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log('Error fetching users:', error);
      setUsers([]);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Search Users</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {users.length > 0 ? (
        <div>
          <h2>User Details</h2>
          {users.map((user) => (
            <div key={user._id}>
              <p>Email: {user.email}</p>
              <p>Phone Number: {user.phoneNumber}</p>
              <p>Product Type: {user.productType}</p>
              <p>Status: {user.status}</p>
              <p>Reason: {user.reason}</p>

              <h3>Return History</h3>
              {user.returnHistory.map((item) => (
                <div key={item.type}>
                  <p>Type: {item.type}</p>
                  <p>Count: {item.count}</p>
                  <hr />
                </div>
              ))}

              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default SearchButton;
