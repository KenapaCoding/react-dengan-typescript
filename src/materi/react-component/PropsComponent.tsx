type Props = {
	nama?: string;
	umur: number;
	sudahMenikah: 'sudah' | 'belum';
};

const PropsComponent = ({ nama='Anonim', umur, sudahMenikah }: Props) => {
	return (
		<div>
			<h1>
				Hello nama saya {nama}, saya berumur {umur} dan saya {sudahMenikah} menikah
			</h1>
		</div>
	);
};

export default PropsComponent;
