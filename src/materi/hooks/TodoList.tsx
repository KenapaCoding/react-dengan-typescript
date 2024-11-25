import React from "react";
import useFetch from "./useFetch";

interface TodoItem {
    id:number
    userId:number
    title:string
    completed:boolean
}

const TodoList = () => {
    const {data, loading, error} =useFetch<TodoItem[]>('https://jsonplaceholder.typicode.com/todos')

    if(loading){
        return <h1>loading</h1>
    }

    if(error) {
        return <h1>Error fetching data </h1>
    }

	return (
		<div>
			<ul className='flex flex-col p-2'>
				{data?.map((todo) => {
					return <li className='border-2 border-y-black'>{todo.title}</li>;
				})}
			</ul>
		</div>
	);
};

export default TodoList;
