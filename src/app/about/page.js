/* eslint-disable react/no-unescaped-entities */
export default function About() {
	return (
		<main className='bg-[var(--background)] text-[var(--foreground)] min-h-screen'>
			{/* Letter from Aminata Section */}
			<section className='py-16 px-8 bg-gray-50'>
				<div className='container mx-auto flex flex-col md:flex-row items-center'>
					<div className='md:w-2/3'>
						<h2 className='text-4xl font-bold mb-4 text-[var(--secondary)]'>
							Letter from Aminata
						</h2>
						<p className='text-lg leading-relaxed'>
							Dear explorers, 
						</p>
						<p className='text-lg leading-relaxed'>
							Are you seeking clarity, alignment and connection
							with your radiance? Or the tools to enhance collaboration,
							navigate complex projects / relationships, transform the culture
							within your organization and achieve lasting impact? Welcome to
							this space designed to support you. Born and raised in Senegal,
							I’ve worked in a variety of disciplines across the world — from
							political science, and finance to human-centered design.
							Throughout my journey, from Senegal to France to the United Stated
							and many countries in between, I’ve navigated career transitions,
							physical pain, and heartbreak. All of which have shown me
							firsthand the importance of navigating uncertainty and cultivating
							one’s own sense of home, both within and beyond.
						</p>
					</div>
					<div className='md:w-1/3 md:ml-8'>
						<div className='h-64 w-64 bg-gray-300 flex items-center justify-center mx-auto md:ml-auto'>
							<p className='text-lg font-bold'>"Writing" Portrait</p>
						</div>
					</div>
				</div>
			</section>

			{/* Approach Language Section */}
			<section className='py-16 px-8 bg-white text-center'>
				<div className='container mx-auto'>
					<h3 className='text-3xl font-semibold mb-6 text-gray-700'>
						"Our approach focuses on cultivating authentic, sustainable, and
						aligned growth through personalized coaching and facilitation."
					</h3>
					<div className='bg-gray-200 py-8 px-6 rounded-lg'>
						<p className='text-lg leading-relaxed'>
							Through our structured coaching programs, we empower you to align
							your actions with your goals, ensuring long-term results and
							personal transformation.
						</p>
					</div>
				</div>
			</section>

			{/* Bulleted Pillars Section */}
			<section className='py-16 px-8 bg-gray-50'>
				<div className='container mx-auto'>
					<h2 className='text-4xl font-bold mb-8 text-[var(--secondary)] text-center'>
						Our Pillars
					</h2>
					<ul className='list-disc list-inside text-lg leading-relaxed text-gray-700 space-y-4'>
						<li>
							<strong>Authenticity:</strong> We help you discover and embrace
							your true self.
						</li>
						<li>
							<strong>Sustainability:</strong> Focused on creating enduring
							relationships and strategies.
						</li>
						<li>
							<strong>Growth:</strong> Personalized guidance for your personal
							and professional journey.
						</li>
						<li>
							<strong>Alignment:</strong> Bridging the gap between intention and
							action.
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
}
