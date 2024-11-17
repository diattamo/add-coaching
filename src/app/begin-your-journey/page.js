/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
	return (
	  <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen">
		{/* Header Section */}
		<section className="py-16 px-8 bg-gray-50">
		  <div className="container mx-auto flex flex-col md:flex-row items-center">
			<div className="md:w-1/2">
			  <h1 className="text-5xl font-bold mb-4 text-[var(--secondary)]">
				Building Relationships at the Heart of Transformation
			  </h1>
			</div>
			<div className="md:w-1/2 md:ml-8">
			  <div className="rounded-xl h-64 bg-gray-300 flex items-center justify-center">
				<p className="text-lg font-bold">"Community" Image</p>
			  </div>
			</div>
		  </div>
		</section>
  
		{/* Offerings Overview Section */}
		<section className="py-16 px-8 bg-white">
		  <div className="container mx-auto">
			<h2 className="text-4xl font-bold mb-8 text-center text-[var(--secondary)]">
			  Explore Our Offerings
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			  {/* Offering 1 */}
			  <div className="rounded-xl h-40 bg-gray-200 flex items-center justify-center">
				<p className="text-lg font-semibold">Offering #1 Overview</p>
			  </div>
			  {/* Offering 2 */}
			  <div className="rounded-xl h-40 bg-gray-200 flex items-center justify-center">
				<p className="text-lg font-semibold">Offering #2 Overview</p>
			  </div>
			  {/* Offering 3 */}
			  <div className="rounded-xl h-40 bg-gray-200 flex items-center justify-center">
				<p className="text-lg font-semibold">Offering #3 Overview</p>
			  </div>
			  {/* Offering 4 */}
			  <div className="rounded-xl h-40 bg-gray-200 flex items-center justify-center">
				<p className="text-lg font-semibold">Offering #4 Overview</p>
			  </div>
			</div>
		  </div>
		</section>
  
		{/* Call-to-Action Section */}
		<section className="py-16 px-8 bg-gray-50">
		  <div className="container mx-auto flex flex-col md:flex-row items-center">
			<div className="md:w-1/2">
			  <div className="rounded-xl h-64 bg-gray-300 flex items-center justify-center">
				<p className="text-lg font-bold">Photo: Aminata working with people</p>
			  </div>
			</div>
			<div className="md:w-1/2 md:ml-8 text-center md:text-left">
			  <h3 className="text-3xl font-bold mb-4 text-[var(--secondary)]">
				Ready to Begin Your Journey?
			  </h3>
			  <p className="text-lg leading-relaxed mb-4">
				Schedule a session with Aminata to explore how coaching and facilitation
				can help you build meaningful relationships and create lasting
				transformation.
			  </p>
			  <button className="px-6 py-2 bg-[var(--secondary)] text-white font-bold rounded">
				Book Now
			  </button>
			</div>
		  </div>
		</section>
	  </main>
	);
  }
  