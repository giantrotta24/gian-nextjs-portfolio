import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="container max-w-full">
      <Head>
        <title>Gianfranco Trotta</title>
        <meta name="description" content="Gianfranco Trotta's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="font-mono antialiased grid grid-cols-1 md:grid-cols-grid-header gap-x-8 place-items-center text-left bg-zinc-900 text-white h-screen px-4">
        <div>
          <p className="text-base text-blue-300">Hi, I am</p>
          <h1 className="text-3xl sm:text-5xl font-sans uppercase tracking-wide leading-loose font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-600">
            Gianfranco Trotta.
          </h1>
          <h2 className="text-s sm:text-xl">
            A passionate full-stack{' '}
            <span className="border-b hover:border-b-2 hover:border-blue-300 hover:cursor-pointer">
              software engineer
            </span>
            .
          </h2>
        </div>

        <ul>
          <li>LinkedIn</li>
          <li>Github</li>
          <li>Instagram</li>
        </ul>
      </header>
      <main id="main">HELLO WORLD</main>
    </div>
  );
};

export default Home;
