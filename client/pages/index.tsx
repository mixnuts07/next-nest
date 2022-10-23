import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState<string>("dark");
  const toggleMode = () => {
    darkMode === "dark" ? setDarkMode("") : setDarkMode("dark");
  };
  return (
    <div className="">
      {/* <div className={darkMode}> */}
      <Head>
        <title>MyApp</title>
        <meta name="description" content="For Learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col max-w-4/5 mx-auto dark:bg-purple">
        <h1 className="text-green">HEY</h1>
        <button onClick={toggleMode}>Toggle Mode</button>
        <Link href="/about">ABOUT</Link>
      </main>
    </div>
  );
};

export default Home;
