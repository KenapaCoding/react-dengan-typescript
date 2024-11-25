export const FormSubmit = () => {
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('form submitted')
    }

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Type Your Name'
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};
