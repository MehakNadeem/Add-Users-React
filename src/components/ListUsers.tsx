import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { toggleSortDirection } from '../store/users/user.slice';


const ListUsers: React.FC = () =>{
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const { isAscendingID, isAscendingName } = useSelector((state: RootState) => state.user.sorting);

  const handleSort = (key: 'ID' | 'Name') => (event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>) => {
    dispatch(toggleSortDirection(key));
  }

  return (
    <div className="container m-5">
      <h1 className="text-center mb-3">Users List</h1>
      <table className="table table-hover table-striped table-bordered">
        <thead>
          <tr>
            <th onClick={handleSort('ID')}>
              ID <i className={`fas fa-arrow-${isAscendingID ? 'down' : 'up'}`}></i>
            </th>
            <th onClick={handleSort('Name')}>
              Name <i className={`fas fa-arrow-${isAscendingName ? 'down' : 'up'}`}></i>
            </th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListUsers;