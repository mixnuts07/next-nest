import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState<string>("dark");
  const toggleMode = () => {
    darkMode === "dark" ? setDarkMode("") : setDarkMode("dark");
  };
  return (
    <div className={darkMode}>
      <div className=" bg-blue max-w-4/5 mx-auto dark:bg-purple">
        <Head>
          <title>MyApp</title>
          <meta name="description" content="For Learning" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-yellow">HEY</h1>
        <button onClick={toggleMode}>Toggle Mode</button>
      </div>
    </div>
  );
};

export default Home;
