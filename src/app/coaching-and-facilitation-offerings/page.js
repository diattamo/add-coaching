/* eslint-disable react/no-unescaped-entities */
export default function Offerings() {
	return (
		<main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen">
			{/* Offerings 1 and 2 Section */}
			<section className="py-16 px-8 bg-gray-50">
				<div className="container mx-auto">
					{/* Offering 1 */}
					<div className="flex flex-col md:flex-row items-center mb-16">
						<div className="md:w-2/3">
							<h2 className="text-4xl font-bold mb-4 text-[var(--secondary)]">
								Offering #1
							</h2>
							<p className="text-lg leading-relaxed">
								Description of Offering #1, focusing on growth, sustainability,
								and personal development. Highlight how this offering benefits
								individuals or organizations.
							</p>
						</div>
						<div className="md:w-1/3 md:ml-8">
							<div className="rounded-xl h-64 bg-gray-300 flex items-center justify-center">
								<p className="text-lg font-bold">Relevant Image</p>
							</div>
						</div>
					</div>

					{/* Offering 2 */}
					<div className="flex flex-col md:flex-row-reverse items-center">
						<div className="md:w-2/3">
							<h2 className="text-4xl font-bold mb-4 text-[var(--secondary)]">
								Offering #2
							</h2>
							<p className="text-lg leading-relaxed">
								Description of Offering #2, showcasing alignment with personal
								and professional goals. Include key details or examples of how
								this offering has helped others.
							</p>
						</div>
						<div className="md:w-1/3 md:mr-8">
							<div className="rounded-xl h-64 bg-gray-300 flex items-center justify-center">
								<p className="text-lg font-bold">Relevant Image</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Offerings 3 and 4 Section */}
			<section className="py-16 px-8 bg-white">
				<div className="container mx-auto">
					{/* Offering 3 */}
					<div className="flex flex-col md:flex-row items-center mb-16">
						<div className="md:w-2/3">
							<h2 className="text-4xl font-bold mb-4 text-[var(--secondary)]">
								Offering #3
							</h2>
							<p className="text-lg leading-relaxed">
								Description of Offering #3. Focus on actionable insights and
								examples. Explain why it's important and how it aligns with
								coaching principles.
							</p>
						</div>
						<div className="md:w-1/3 md:ml-8">
							<div className="rounded-xl h-64 bg-gray-300 flex items-center justify-center">
								<p className="text-lg font-bold">Relevant Image</p>
							</div>
						</div>
					</div>

					{/* Offering 4 */}
					<div className="flex flex-col md:flex-row-reverse items-center">
						<div className="md:w-2/3">
							<h2 className="text-4xl font-bold mb-4 text-[var(--secondary)]">
								Offering #4
							</h2>
							<p className="text-lg leading-relaxed">
								Description of Offering #4, highlighting transformative results
								and outcomes. Include testimonials or a call to action related
								to this offering.
							</p>
						</div>
						<div className="md:w-1/3 md:mr-8">
							<div className="rounded-xl h-64 bg-gray-300 flex items-center justify-center">
								<p className="text-lg font-bold">Relevant Image</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
