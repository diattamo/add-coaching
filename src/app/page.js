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
      <Navbar/>
      <main>
        <h1>Site Coming Soon...</h1>
      </main>
      <Footer/>
    </>
  );
}
