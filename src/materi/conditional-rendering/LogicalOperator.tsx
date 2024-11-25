type Props = {
	isLoggedIn: boolean;
};

const LogicalOperator = ({ isLoggedIn }: Props) => {
	return (
		<div>
			{isLoggedIn && <h1>Welcome back, User !</h1>}
			{isLoggedIn || <h1>Please Login</h1>}
		</div>
	);
};

export default LogicalOperator;
