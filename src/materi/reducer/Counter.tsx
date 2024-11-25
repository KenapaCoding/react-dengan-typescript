import React, { useReducer } from 'react';
import counterReducer, {CounterState} from './CounterReducer';

const initialState:CounterState = {count:0}

const Counter = () => {
	const [state, dispatch] = useReducer(counterReducer,initialState)
	return (
		<div>
			<h1>Count : {state.count}</h1>
			<button onClick={() => dispatch({type:'increment', payload:1})} >Increase</button>
			<button onClick={() => dispatch({type:'decrement', payload:1})}>Decrease</button>
			<button onClick={() => dispatch({type:'reset'})}>Reset</button>
		</div>
	);
};

export default Counter;
