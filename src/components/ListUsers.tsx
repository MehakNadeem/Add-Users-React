import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { toggleSortDirection } from "../features/userSlice";


export default function ListUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const { isAscendingID, isAscendingName } = useSelector((state: RootState) => state.user.sorting);

  return (
    <div className="container m-5">
      <h1 className="text-center mb-3">Users List</h1>
      <table className="table table-hover table-striped table-bordered">
        <thead>
          <tr>
            <th>
              <button className="btn" 
                      type="button" 
                      onClick={(event) => {
                        dispatch(toggleSortDirection('ID'));
                      }}>
                      ID <i className={`fas fa-arrow-${isAscendingID ? 'down' : 'up'}`}></i>
              </button>
            </th>
            <th>
              <button className="btn" 
                      type="button" 
                      onClick={(event) => {
                        dispatch(toggleSortDirection('Name'));
                      }}>
                      Name <i className={`fas fa-arrow-${isAscendingName ? 'down' : 'up'}`}></i>
              </button>
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
