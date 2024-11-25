import useCounter from './useCounter';

const CounterComponent = () => {
	
    const {count,decrement,increment,reset} = useCounter()


	return (
		<div>
			<h1>Count : {count}</h1>
			<div className='flex gap-3'>
				<button onClick={increment}>Increase</button>
				<button onClick={decrement}>Decrease</button>
				<button onClick={reset}>Reset</button>
			</div>
		</div>
	);
};

export default CounterComponent;
