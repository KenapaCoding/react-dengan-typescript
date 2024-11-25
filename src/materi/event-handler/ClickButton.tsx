const ClickButton = () => {
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        alert('Button clicked')
        console.log('Button clicked')
        console.log(event.target)
    }
  return <button onClick={handleClick}>Click me</button>;
};

export default ClickButton;
