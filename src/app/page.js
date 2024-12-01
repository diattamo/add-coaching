import Link from "next/link";
import {useTranslations} from "next-intl";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
	const t = useTranslations();

	return (
		<main className='bg-[var(--background)] text-[var(--foreground)] min-h-screen'>
			{/* Hero Section */}
			<section className='py-16 px-8 bg-gray-50 text-[var(--foreground)]'>
				<div className='container mx-auto flex flex-col md:flex-row items-center'>
					<div className='md:w-2/3'>
						<div className='rounded-xl h-64 bg-gray-300 flex items-center justify-center'>
							<p className='text-xl font-bold'>Simple Image (Community)</p>
						</div>
					</div>
					<div className='md:w-1/3 md:ml-8 text-center md:text-left'>
						<h1 className='text-5xl font-bold mb-4 text-[var(--secondary)]'>
							Welcome
						</h1>
						<p className='text-lg leading-relaxed mb-4'>
							Cultivating Holistic Connections.
						</p>
						<button className='px-6 py-2 bg-[var(--secondary)] text-white font-bold rounded'>
							Get Started
						</button>
					</div>
				</div>
			</section>

			{/* Quote Section */}
			<section className='py-16 px-8 bg-white'>
				<div className='container mx-auto flex flex-col md:flex-row items-center'>
					<div className='md:w-2/3'>
						<p className='text-2xl font-semibold italic mb-6'>
							{t("Home.quote-1")}
						</p>
					</div>
					<div className='md:w-1/3'>
						<div className='rounded-xl h-64 w-64 bg-gray-300 flex items-center justify-center mx-auto md:ml-auto'>
							<p className='text-lg font-bold'>Aminata Portrait</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why Coaching Section */}
			<section className='py-16 px-8 bg-gray-50 text-[var(--foreground)] text-center'>
				<div className='container mx-auto'>
					<h2 className='text-4xl font-bold mb-4 text-[var(--secondary)]'>
						Why Coaching
					</h2>
					<p className='text-lg leading-relaxed mb-6'>
						Authenticity, sustainability, and long-term development are at the
						core of our coaching philosophy.
					</p>
					<Link href='/impact-stories'>
						<button className='px-6 py-2 bg-[var(--secondary)] text-white font-bold rounded'>
							View Our Offerings
						</button>
					</Link>
				</div>
			</section>
		</main>
	);
}
