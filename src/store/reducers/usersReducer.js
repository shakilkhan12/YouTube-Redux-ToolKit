import { createSlice } from '@reduxjs/toolkit';
import { getUsers, getUser } from '../actions/usersAction';
const usersReducer = createSlice({
	name: 'usersReducer',
	initialState: {
		users: [],
		usersContainer: [],
		loader: false,
		errors: {},
		user: {},
	},
	reducers: {
		filteredUsers: (state, action) => {
			state.users = state.usersContainer.filter((user) =>
				user.name.toLowerCase().includes(action.payload)
			);
		},
	},
	extraReducers: {
		[getUsers.pending]: (state, action) => {
			state.loader = true;
		},
		[getUsers.fulfilled]: (state, action) => {
			state.loader = false;
			state.users = action.payload;
			state.usersContainer = action.payload;
		},
		[getUsers.rejected]: (state, action) => {
			state.loader = false;
			state.errors = action.payload;
		},
		[getUser.pending]: (state, action) => {
			state.loader = true;
		},
		[getUser.fulfilled]: (state, action) => {
			state.loader = false;
			state.user = action.payload;
		},
		[getUser.rejected]: (state, action) => {
			state.loader = false;
			state.errors = action.payload;
		},
	},
});
export const { filteredUsers } = usersReducer.actions;
export default usersReducer.reducer;
