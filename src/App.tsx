import React from 'react';
import AddUser from './components/AddUser';
import ListUsers from './components/ListUsers';

export default function App() {
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className='row'>
        <AddUser />
        <ListUsers />
      </div>
    </div>
  );
}
