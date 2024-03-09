import React, { useState } from 'react';
import './collectionList.css'; 

const CollectionList = () => {
  const [users, setUsers] = useState([
    { id: 1,username: 'Diya', email: 'diyatirur@gmail.com', blocked: false },
    { id: 2, username: 'Sona', email: 'sona345@gmail.com', blocked: true },
    { id: 3, username: 'Ravi', email: 'ravi123@gmail.com', blocked: false },
    { id: 4, username: 'Arun', email: 'arunks@gmail.com', blocked: true },
    { id: 5, username: 'Meera', email: 'meera234@gmail.com', blocked: true },
    { id: 6, username: 'John', email: 'johnckm@gmail.com', blocked: false },
  
  ]);

  const handleBlockToggle = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        return { ...user, blocked: !user.blocked };
      }
      return user;
    }));
  };

  return (
    <div className="collection-list-container">
      <h1>Collection List</h1>
     
      <table className="collection-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Block Code</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleBlockToggle(user.id)} className={user.blocked ? 'blocked' : 'unblocked'}>
                  {user.blocked ? 'Unblock' : 'Block'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
};

export default CollectionList;