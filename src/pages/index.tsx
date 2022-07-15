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

      <main id="main">
        <div className="font-mono grid place-items-center bg-gradient-to-r from-cyan-900 to-[#071b22] text-white h-screen px-4">
          <div className="antialiased">
            <p className="text-xs sm:text-base text-teal-300">Hi, my name is</p>
            <h1 className="text-xl sm:text-5xl font-sans uppercase tracking-wide leading-loose font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">
              Gianfranco Trotta.
            </h1>
            <h2 className="text-xs sm:text-xl">
              A passionate full-stack{' '}
              <span className="border-b hover:border-b-2 hover:border-teal-500 hover:cursor-pointer">
                software engineer
              </span>
              .
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
