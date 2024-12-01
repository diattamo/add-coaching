import Head from 'next/head';
import Navbar from './Navbar';

export default function SiteHeader({ locale }) {
	return (
		<>
			<Head>
				<title>ADD Coaching & Facilitation</title>
				<meta name='description' content='Life Coaching and Facilitation' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar
				locale={locale}
			/>
		</>
	);
}
