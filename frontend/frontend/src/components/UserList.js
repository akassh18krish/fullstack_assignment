// import React, { useState, useEffect } from 'react';
// import { addUser, getUsers, updateUser, deleteUser, addFriend, updateFriend, deleteFriend } from '../api';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({ name: '', email: '' });
//   const [editingUser, setEditingUser] = useState(null);
//   const [newFriend, setNewFriend] = useState({ userId: '', friendName: '', friendEmail: '' });
//   const [editingFriend, setEditingFriend] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const usersData = await getUsers();
//         setUsers(usersData);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleAddUser = async (e) => {
//     e.preventDefault();
//     try {
//       const addedUser = await addUser(newUser);
//       setUsers([...users, addedUser]);
//       setNewUser({ name: '', email: '' });
//     } catch (error) {
//       console.error('Error adding user:', error);
//     }
//   };

//   const handleUpdateUser = async (e) => {
//     e.preventDefault();
//     try {
//       const updatedUser = await updateUser(editingUser.id, editingUser);
//       setUsers(users.map(user => (user.id === editingUser.id ? updatedUser : user)));
//       setEditingUser(null);
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await deleteUser(id);
//       setUsers(users.filter(user => user.id !== id));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const handleAddFriend = async (e) => {
//     e.preventDefault();
//     try {
//       const addedFriend = await addFriend(newFriend);
//       setUsers(users.map(user => 
//         user.id === newFriend.userId 
//         ? {...user, friends: [...user.friends, addedFriend]} 
//         : user
//       ));
//       setNewFriend({ userId: '', friendName: '', friendEmail: '' });
//     } catch (error) {
//       console.error('Error adding friend:', error);
//     }
//   };

//   const handleUpdateFriend = async (e) => {
//     e.preventDefault();
//     try {
//       const updatedFriend = await updateFriend(editingFriend.id, editingFriend);
//       setUsers(users.map(user => 
//         user.id === editingFriend.userId 
//         ? {...user, friends: user.friends.map(friend => friend.id === editingFriend.id ? updatedFriend : friend)} 
//         : user
//       ));
//       setEditingFriend(null);
//     } catch (error) {
//       console.error('Error updating friend:', error);
//     }
//   };

//   const handleDeleteFriend = async (id, userId) => {
//     try {
//       await deleteFriend(id);
//       setUsers(users.map(user => 
//         user.id === userId 
//         ? {...user, friends: user.friends.filter(friend => friend.id !== id)} 
//         : user
//       ));
//     } catch (error) {
//       console.error('Error deleting friend:', error);
//     }
//   };

//   const handleToggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div>
//       <h1>User List</h1>
//       <form onSubmit={handleAddUser}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newUser.name}
//           onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={newUser.email}
//           onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//           required
//         />
//         <button type="submit">Add User</button>
//       </form>
//       <button onClick={handleToggleDetails}>
//         {showDetails ? 'Hide Details' : 'View All Details'}
//       </button>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             {showDetails ? (
//               <>
//                 <p>ID: {user.id}</p>
//                 <p>Name: {user.name}</p>
//                 <p>Email: {user.email}</p>
//                 <ul>
//                   {user.friends.map(friend => (
//                     <li key={friend.id}>
//                       <p>{friend.friend_name} ({friend.friend_email})</p>
//                       <button onClick={() => setEditingFriend({...friend, userId: user.id})}>Edit Friend</button>
//                       <button onClick={() => handleDeleteFriend(friend.id, user.id)}>Delete Friend</button>
//                     </li>
//                   ))}
//                 </ul>
//               </>
//             ) : (
//               <p>{user.name}</p>
//             )}
//             <button onClick={() => setEditingUser(user)}>Edit</button>
//             <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       {editingUser && (
//         <form onSubmit={handleUpdateUser}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={editingUser.name}
//             onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={editingUser.email}
//             onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
//             required
//           />
//           <button type="submit">Update User</button>
//         </form>
//       )}
//       <h2>Add a Friend</h2>
//       <form onSubmit={handleAddFriend}>
//         <select onChange={(e) => setNewFriend({ ...newFriend, userId: e.target.value })} required>
//           <option value="">Select User</option>
//           {users.map(user => (
//             <option key={user.id} value={user.id}>
//               {user.name}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           placeholder="Friend's Name"
//           value={newFriend.friendName}
//           onChange={(e) => setNewFriend({ ...newFriend, friendName: e.target.value })}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Friend's Email"
//           value={newFriend.friendEmail}
//           onChange={(e) => setNewFriend({ ...newFriend, friendEmail: e.target.value })}
//           required
//         />
//         <button type="submit">Add Friend</button>
//       </form>
//       {editingFriend && (
//         <form onSubmit={handleUpdateFriend}>
//           <input
//             type="text"
//             placeholder="Friend's Name"
//             value={editingFriend.friendName}
//             onChange={(e) => setEditingFriend({ ...editingFriend, friendName: e.target.value })}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Friend's Email"
//             value={editingFriend.friendEmail}
//             onChange={(e) => setEditingFriend({ ...editingFriend, friendEmail: e.target.value })}
//             required
//           />
//           <button type="submit">Update Friend</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default UserList;









import React, { useState, useEffect } from 'react';
import { addUser, getUsers, updateUser, deleteUser, addFriend, updateFriend, deleteFriend } from '../api';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editingUser, setEditingUser] = useState(null);
  const [newFriend, setNewFriend] = useState({ userId: '', friendName: '', friendEmail: '' });
  const [editingFriend, setEditingFriend] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const addedUser = await addUser(newUser);
      setUsers([...users, addedUser]);
      setNewUser({ name: '', email: '' });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await updateUser(editingUser.id, editingUser);
      setUsers(users.map(user => (user.id === editingUser.id ? updatedUser : user)));
      setEditingUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleAddFriend = async (e) => {
    e.preventDefault();
    try {
      const addedFriend = await addFriend(newFriend);
      setUsers(users.map(user => 
        user.id === newFriend.userId 
        ? {...user, friends: [...user.friends, addedFriend]} 
        : user
      ));
      setNewFriend({ userId: '', friendName: '', friendEmail: '' });
    } catch (error) {
      console.error('Error adding friend:', error);
    }
  };

  const handleUpdateFriend = async (e) => {
    e.preventDefault();
    try {
      const updatedFriend = await updateFriend(editingFriend.id, editingFriend);
      setUsers(users.map(user => 
        user.id === editingFriend.userId 
        ? {...user, friends: user.friends.map(friend => friend.id === editingFriend.id ? updatedFriend : friend)} 
        : user
      ));
      setEditingFriend(null);
    } catch (error) {
      console.error('Error updating friend:', error);
    }
  };

  const handleDeleteFriend = async (id, userId) => {
    try {
      await deleteFriend(id);
      setUsers(users.map(user => 
        user.id === userId 
        ? {...user, friends: user.friends.filter(friend => friend.id !== id)} 
        : user
      ));
    } catch (error) {
      console.error('Error deleting friend:', error);
    }
  };

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <h1 className="my-4">User List</h1>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleAddUser} className="mb-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                required
              />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                required
              />
              <button type="submit" className="btn btn-primary">Add User</button>
            </div>
          </form>
        </div>
      </div>
      <button onClick={handleToggleDetails} className="btn btn-secondary mb-3">
        {showDetails ? 'Hide Details' : 'View All Details'}
      </button>
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item">
            {showDetails ? (
              <>
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <ul className="list-group">
                  {user.friends.map(friend => (
                    <li key={friend.id} className="list-group-item">
                      <p><strong>{friend.friend_name}</strong> ({friend.friend_email})</p>
                      <button onClick={() => setEditingFriend({...friend, userId: user.id})} className="btn btn-sm btn-info me-2">Edit Friend</button>
                      <button onClick={() => handleDeleteFriend(friend.id, user.id)} className="btn btn-sm btn-danger">Delete Friend</button>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p>{user.name}</p>
            )}
            <button onClick={() => setEditingUser(user)} className="btn btn-sm btn-warning me-2">Edit</button>
            <button onClick={() => handleDeleteUser(user.id)} className="btn btn-sm btn-danger">Delete</button>
          </li>
        ))}
      </ul>
      {editingUser && (
        <form onSubmit={handleUpdateUser} className="mt-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={editingUser.name}
              onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
              required
            />
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={editingUser.email}
              onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
              required
            />
            <button type="submit" className="btn btn-success">Update User</button>
          </div>
        </form>
      )}
      <h2 className="mt-4">Add a Friend</h2>
      <form onSubmit={handleAddFriend} className="mb-3">
        <div className="input-group">
          <select className="form-select" onChange={(e) => setNewFriend({ ...newFriend, userId: e.target.value })} required>
            <option value="">Select User</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="form-control"
            placeholder="Friend's Name"
            value={newFriend.friendName}
            onChange={(e) => setNewFriend({ ...newFriend, friendName: e.target.value })}
            required
          />
          <input
            type="email"
            className="form-control"
            placeholder="Friend's Email"
            value={newFriend.friendEmail}
            onChange={(e) => setNewFriend({ ...newFriend, friendEmail: e.target.value })}
            required
          />
          <button type="submit" className="btn btn-primary">Add Friend</button>
        </div>
      </form>
      {editingFriend && (
        <form onSubmit={handleUpdateFriend} className="mt-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Friend's Name"
              value={editingFriend.friendName}
              onChange={(e) => setEditingFriend({ ...editingFriend, friendName: e.target.value })}
              required
            />
            <input
              type="email"
              className="form-control"
              placeholder="Friend's Email"
              value={editingFriend.friendEmail}
              onChange={(e) => setEditingFriend({ ...editingFriend, friendEmail: e.target.value })}
              required
            />
            <button type="submit" className="btn btn-success">Update Friend</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserList;
