import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { addUser } from '../store/reducers/usersReducer';
const Home = () => {
	const state = useSelector((state) => state.users);
	const dispatch = useDispatch();
	const inputRef = useRef('');
	console.log(state.users);
	const storeUser = (e) => {
		e.preventDefault();
		dispatch(addUser(inputRef.current.value));
		inputRef.current.value = '';
	};
	return (
		<form onSubmit={storeUser}>
			<input type='text' name='' placeholder='Add user...' ref={inputRef} />
			<br />
			<br />
			<input type='submit' value='Add User' />
		</form>
	);
};
export default Home;
