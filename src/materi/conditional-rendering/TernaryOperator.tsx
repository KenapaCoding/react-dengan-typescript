type Props = {
	isLoggedIn: boolean;
};

const TernaryOperator = ({ isLoggedIn }: Props) => {
	return (
		<div className={`${isLoggedIn ? 'blue-text' : 'red-text'}`}>
			{isLoggedIn ? <h1>Welcome back, User !</h1> : <h1>Please Login</h1>}
		</div>
	);
};

export default TernaryOperator;
