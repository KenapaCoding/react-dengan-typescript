const TextInput = () => {
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log('Input : ', event.target.value)
    }
	return (
		<div>
			<input type='text' onChange={handleChange} />
		</div>
	);
};

export default TextInput;
