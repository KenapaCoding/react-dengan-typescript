import { useState } from 'react';

const GreetingComponent = () => {
	const [greeting, setGreeting] = useState<string>('Hello');

    const handleClick = () => {
       setGreeting('Hello World !') 
    }

	return (
		<div>
			<p>{greeting}</p>
            <button onClick={handleClick}>Update Greeting</button>
		</div>
	);
};

export default GreetingComponent;
