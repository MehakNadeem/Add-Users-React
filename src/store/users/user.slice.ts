import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortingState, User } from '../../models/data';

export interface UserState{
  users: User[];
  nextId: number;
  sorting: SortingState;
}

const initialState: UserState = {
  users: [],
  nextId: 1,
  sorting: { 
    isAscendingID: true,
    isAscendingName: true
  }
}

export const userSlice = createSlice({
  name: 'userSlice',
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
export const { createUser, toggleSortDirection } = userSlice.actions;