import React, { useState } from "react";
import { RootState } from "../store";
import { createUser } from '../store/users/user.slice';
import { useDispatch, useSelector } from "react-redux";

const AddUser: React.FC = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const setUserAttributes = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createUser(user));
    setUser({
      name: "",
      email: ""
    });
  }
  
  return (
    <div className="container m-5">
      <form
        onSubmit={handleFormSubmit}
        >
        <label className="mt-2">Name: </label>
        <input className="form-control mt-2 mb-2"
               type="text"
               value={user.name}
               placeholder="Name"
               name="name"
               onChange={setUserAttributes}
          required
        />
        <label>Email: </label>
        <input className="form-control mt-2"
               type="email"
               value={user.email}
               placeholder="Email"
               name="email"
               onChange={setUserAttributes}
          required
        />
        <button type="submit" className="btn btn-primary mt-3 w-25">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;