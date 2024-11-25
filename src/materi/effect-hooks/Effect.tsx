import { useEffect, useState } from 'react';

const Effect = () => {
	const [count, setCount] = useState<number>(0);
    const [teks, setText] = useState<string>("")
	// hook tidak disarankan ditempatkan didalam function, if, dll
	useEffect(() => {
		console.log('Use Effect dijalankan pertama komponen di render');
	},[teks]);

	return (
		<div>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>increase</button>
            <p>{teks}</p>
            <button onClick={() => {
                if(teks) {
                    setText('')
                } else {
                    setText("Hello")
                }
                }}>Change Text</button>
		</div>
	);
};

export default Effect;
