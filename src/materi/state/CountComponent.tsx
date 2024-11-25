import { useState } from 'react';

const CountComponent = () => {
	const [count, setCount] = useState<number>(0);
    const handleClick = () => {
        setCount(c => c + 1)
    }
	return (
		<div>
			<p>Count is : {count}</p>
            <button onClick={handleClick}>Increase</button>
		</div>
	);
};

export default CountComponent;
