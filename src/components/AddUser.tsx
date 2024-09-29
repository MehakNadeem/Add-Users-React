import React from "react";
import { RootState } from "../store";
import { createUser, handleChange, clearForm } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function AddUser() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <div className="container m-5">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(createUser(user));
          dispatch(clearForm());
        }}
        >
        <label className="mt-2">Name: </label>
        <input className="form-control mt-2 mb-2"
               type="text"
               value={user.name}
               placeholder="Name"
               name="name"
               onChange={(event) => {
                  dispatch(handleChange({
                    name: event.target.name,
                    value: event.target.value
                  }))
                }}
          required
        />
        <label>Email: </label>
        <input className="form-control mt-2"
               type="email"
               value={user.email}
               placeholder="Email"
               name="email"
               onChange={(event) => {
                  dispatch(handleChange({
                    name: event.target.name,
                    value: event.target.value
                  }))
                }}
          required
        />
        <button type="submit" className="btn btn-primary mt-3 w-25">Add User</button>
      </form>
    </div>
  );
}