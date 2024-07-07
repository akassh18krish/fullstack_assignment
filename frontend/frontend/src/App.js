import React from 'react';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
    <div className="container">
        <h1>User Management</h1>
        <UserList />
    </div>
);

export default App;
