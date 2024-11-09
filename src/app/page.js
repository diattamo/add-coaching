// pages/Home.js

import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>ADD Coaching & Facilitation</title>
        <meta name="description" content="Life Coaching and Facilitation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen">
        {/* Neutral Background Sections */}
        <section className="py-16 px-8 bg-gray-50 text-[var(--foreground)]">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-6 text-[var(--secondary)]">
              Welcome to ADD Coaching &amp; Facilitation
            </h1>
            <p className="text-lg leading-relaxed text-gray-700">
              We specialize in building sustainable relationships through life coaching and facilitation.
              Our goal is to help you cultivate holistic connections and foster growth in both personal
              and professional spheres.
            </p>
          </div>
        </section>

        <section className="py-16 px-8 bg-gray-50 text-[var(--foreground)]">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-[var(--secondary)]">
              Our Services
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Whether you're looking for personal growth, family reconciliation, or leadership facilitation,
              we offer a variety of coaching services to meet your needs.
            </p>
          </div>
        </section>

        <section className="py-16 px-8 bg-gray-50 text-[var(--foreground)]">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-[var(--secondary)]">
              Why Choose Us?
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              At ADD Coaching &amp; Facilitation, we emphasize authenticity, sustainability, and long-term
              development in every relationship we help cultivate.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
