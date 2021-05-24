import { createSlice } from '@reduxjs/toolkit';

const usersReducer = createSlice({
	name: 'anything',
	initialState: {
		users: [
			{ id: 1, name: 'Shakil Khan' },
			{ id: 2, name: 'Bilal Khan' },
		],
	},
	reducers: {
		addUser: (state, action) => {
			console.log(action);
			state.users = [...state.users, action.payload];
		},
	},
});
export const { addUser } = usersReducer.actions;
export default usersReducer.reducer;
