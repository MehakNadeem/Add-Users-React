import { createSlice } from '@reduxjs/toolkit';

export interface User{
  id: number;
  name: string;
  email: string;
}

interface SortingState{
  isAscendingID: boolean;
  isAscendingName: boolean;
}

interface UserState{
  user: User;
  users: User[];
  nextId: number;
  sorting: SortingState;
}

const initialState: UserState = {
  user: { id: 1, name: '', email: '' },
  users: [],
  nextId: 1,
  sorting: { 
    isAscendingID: true,
    isAscendingName: true
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, {payload}) => {
      const newUser = {
        id: state.nextId,
        ... payload
      }
      state.users.push(newUser);
      state.nextId++;
    },

    handleChange: (state, {payload}) => {
      state.user= {
        ...state.user,
        [payload.name]: payload.value
      }
    },

    clearForm: (state) => {
      state.user = { id: state.nextId, name: '', email: '' };
    },

    toggleSortDirection: (state, {payload}) => {
      const key = `isAscending${payload}` as keyof SortingState;
      state.sorting[key] = !state.sorting[key];
      if (payload === 'ID') {
        state.users.sort((a, b) => (state.sorting.isAscendingID ? a.id - b.id : b.id - a.id));
      } 
      else if (payload === 'Name') {
        state.users.sort((a, b) =>
          state.sorting.isAscendingName ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
      }
    },
  },
});

export default userSlice.reducer;
export const { handleChange, createUser, clearForm, toggleSortDirection} = userSlice.actions;

