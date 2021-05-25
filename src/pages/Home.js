import { useSelector, useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';
import User from '../components/User';
import { getUsers } from '../store/actions/usersAction';
import Loader from '../components/Loader';
import Filter from '../components/Filter';
const Home = () => {
	const { users, loader } = useSelector((state) => state.users);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsers());
	}, []);
	return !loader ? (
		<>
			<Filter />
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>Sno</th>
						<th>Name</th>
						<th>Username</th>
						<th>Email</th>
						<th>Details</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<User key={index} index={index} user={user} />
					))}
				</tbody>
			</table>
		</>
	) : (
		<Loader />
	);
};
export default Home;
