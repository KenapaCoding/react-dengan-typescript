import { useState } from 'react';

type User = {
	name: string;
	age: number;
};

const UserProfile = () => {
	const [user, setUser] = useState<User>({
		name: 'John Doe',
		age: 26,
	});
    const updateUser = () => {
        setUser({
            ...user,
            age: user.age + 1
        })
    }
    const updateUserName = () => {
        setUser({
            ...user,
            name: 'Budiman'
        })
    }
	return (
		<div>
			<p>Name : {user.name}</p>
			<p>Age : {user.age}</p>
            <button onClick={updateUser}>Increase Age</button>
            <button onClick={updateUserName}>Change Name to Budiman</button>
		</div>
	);
};

export default UserProfile;
