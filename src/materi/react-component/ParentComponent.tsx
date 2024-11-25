import PropsComponent from './PropsComponent';

const ParentComponent = () => {
	return (
		<>
			<PropsComponent nama='Ranggo' umur={26} sudahMenikah='sudah'/>
            <PropsComponent nama='Budi' umur={24} sudahMenikah='belum'/>
		</>
	);
};

export default ParentComponent;
