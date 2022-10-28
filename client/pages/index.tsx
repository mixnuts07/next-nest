import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState<string>("dark");
  const toggleMode = () => {
    darkMode === "dark" ? setDarkMode("") : setDarkMode("dark");
  };
  const pages = ["ABOUT", "PRODUCTS"];
  const products = [
    { name: "bag", color: "red" },
    { name: "wallet", color: "blue" },
    { name: "hat", color: "green" },
  ];
  return (
    <div className={darkMode}>
      <Head>
        <title>MyApp</title>
        <meta name="description" content="For Learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TODO:LayOutの追加（共通のヘッダー、フッターなど） */}
      <main>
        <div className="text-center my-5">
          <div className="flex flex-col mx-auto dark:bg-purple dark:text-white mt-10">
            <button onClick={toggleMode}>Toggle Mode</button>
          </div>
          <ul>
            {pages.map((page) => {
              return (
                <li>
                  <Link href={`/${page.toLowerCase()}`}>{page}</Link>
                </li>
              );
            })}
            <div className="flex flex-col mx-auto dark:bg-purple dark:text-white">
              {products.map((product) => {
                return (
                  <h5 key={product.name} className="px-3">
                    <Link
                      href={`/products/${encodeURIComponent(
                        product.name
                      )}/${encodeURIComponent(product.color)}`}
                    >
                      {product.name}
                    </Link>
                  </h5>
                );
              })}
            </div>
          </ul>
        </div>
        <div className="mx-auto pt-10 flex w-fit">
          <ul>
            <li className="text-left flex items-end">
              <h2 className="underline text-2xl">2022.10.10</h2>
              <h4>要素中央ゾロえ</h4>
            </li>
            <li className="text-left">f3232</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
