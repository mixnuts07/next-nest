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
    <div className={darkMode}>
      <Head>
        <title>MyApp</title>
        <meta name="description" content="For Learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col mx-auto dark:bg-purple dark:text-white">
          <button onClick={toggleMode}>Toggle Mode</button>
        </div>
        <ol>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/products/name/red">PRODUCTS</Link>
          </li>
        </ol>
      </main>
    </div>
  );
};

export default Home;
