/** @format */

import useFetch from "./useFetch";

interface DataPost {
	id: number;
	userId: number;
	title: string;
	body: string;
}

const PostList = () => {
    const {data, loading, error} =useFetch<DataPost[]>('https://jsonplaceholder.typicode.com/posts')

    if(loading){
        return <h1>loading</h1>
    }

    if(error) {
        return <h1>Error fetching data </h1>
    }

	return (
		<div>
			<ul className='flex flex-col p-2'>
				{data?.map((post) => {
					return <li className='border-2 border-y-black'>{post.title}</li>;
				})}
			</ul>
		</div>
	);
};

export default PostList;
