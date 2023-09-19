"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Projects() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <main>
      {/* Navbar */}
      <nav className="item-blur bg-fixed border-zinc-800 border-b select-none fixed w-full top-0 z-10">
        <div className="z-10 bg-fixed fixed item-blur w-full h-[1.3px] bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-6">
          <Link className="flex items-center" href={"/"}>
            <img src="logo.png" class="h-9 m-1" alt="logo-svg" />
          </Link>
          <button
            onClick={toggleNav}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isNavOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isNavOpen ? "block" : "hidden"
              } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link href={"/"}>
                  <p
                    className="block text-lg py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ease-in duration-200 hover:text-teal-500 dark:hover:text-teal-500"
                    aria-current="page"
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <p className="block text-lg py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 ease-in duration-200 hover:text-teal-500 dark:hover:text-teal-500 md:p-0 md:dark:hover:bg-transparent">
                    About
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/projects"}>
                  <p className="block text-lg py-2 pl-3 pr-4 text-teal-300 rounded md:hover:bg-transparent md:border-0 md:p-0 ease-in duration-200 hover:text-teal-500 dark:hover:text-teal-500 md:dark:hover:bg-transparent">
                    Projects
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/toolbox"}>
                  <p className="block text-lg py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 ease-in duration-200 hover:text-teal-500 dark:hover:text-teal-500 md:dark:hover:bg-transparent">
                    Toolbox
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*Rays */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 md:-mt-30 -mt-10 h-72 w-72 md:h-auto md:w-auto"
        style={{ zIndex: -1 }}
      >
        <img
          src="rays.png"
          alt="rays"
          loading="lazy"
          className="rays-img select-none"
        />
      </div>

      {/* About text and image container */}
      <div className="flex justify-center items-center mt-20 select-none">
        <h1 className="text-teal-400 text-center uppercase font-bold mt-14 text-lg font-bridge">
          Projects
        </h1>
      </div>
      <div className="flex justify-center items-center select-none">
        <h1 className="text-white p-3 text-center font-bold mt-3 text-5xl font-poppins">
          Here's a selection of my best works.
        </h1>
      </div>
      <div className="flex justify-center items-center select-none">
        <h1 className="text-teal-400 text-center font-bold text-xl mt-14 font-bridge">
          Coming soon!
        </h1>
      </div>
      <div className="space-y-12 md:p-16 p-10 mt-10 select-none">
        <div className="relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-slate-800 to-teal-600 border-slate-700">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
          <div className="grid grid-cols-1 min-h-[500px] md:grid-cols-2">
            <div className="self-end col-span-1 m-8 text-center md:text-left">
              <h2 className="mt-0 mb-4 text-2xl font-bold font-poppins">CryptoCoin 🪙</h2>
              <p className="mb-4">
                CryptoCoin is a crypto app that allows users to search for information about various cryptocurrencies in real-time.
              </p>
              <Link href={"https://git-abdul.github.io/crypto-app"} target="_blank" rel="noopener noreferrer">
                <button className="text-white bg-zinc-800 transition hover:scale-110 hover:-translate-y-2 text-md duration-300 px-5 py-3 font-semibold font-poppins rounded-md">Visit the site</button>
              </Link>
            </div>
            <div className="md:absolute md:top-4 md:right-[-200px] md:w-[800px]">
              <img
                objectFit="fill"
                src="mac1.png"
                width={900}
                height={552}
                layout="intrinsic"
                alt={'Cryptoden'}
              />
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-slate-800 to-teal-600  border-slate-700">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
          <div className="grid grid-cols-1 min-h-[500px] md:grid-cols-2">
          <div className="self-end col-span-1 m-8 text-center md:text-left">
              <h2 className="mt-0 mb-4 text-2xl font-bold font-poppins">E-Commerce 🛒</h2>
              <p className="mb-4">
                With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.
              </p>
              <Link href={"https://git-abdul.github.io/shop-app"} target="_blank" rel="noopener noreferrer">
                <button className="text-white bg-zinc-800 transition hover:scale-110 hover:-translate-y-2 text-md duration-300 px-5 py-3 font-semibold font-poppins rounded-md">Visit the site</button>
              </Link>
            </div>
            <div className="md:absolute md:top-4 md:right-[-200px] md:w-[800px]">
              <img
                objectFit="fill"
                src="mac2.png"
                width={900}
                height={552}
                layout="intrinsic"
                alt={'E-Commerce'}
              />
            </div>
          </div>
        </div>

        <br/>
        <br/>

        <div className="relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-slate-800 to-teal-600  border-slate-700">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
          <div className="grid grid-cols-1 min-h-[500px] md:grid-cols-2">
          <div className="self-end col-span-1 m-8 text-center md:text-left">
              <h2 className="mt-0 mb-4 text-2xl font-bold font-poppins">Weather app 🌤️</h2>
              <p className="mb-4">
                This is a weather app that allows users to search and view information about various weather conditions in real-time.
              </p>
              <Link href={""} target="_blank" rel="noopener noreferrer">
                <button className="text-white bg-zinc-800 transition hover:scale-110 hover:-translate-y-2 text-md duration-300 px-5 py-3 font-semibold font-poppins rounded-md">Visit the site</button>
              </Link>
            </div>
            <div className="md:absolute md:top-4 md:right-[-200px] md:w-[800px]">
              <img
                objectFit="fill"
                src="mac.png"
                width={900}
                height={552}
                layout="intrinsic"
                alt={'Weather-app'}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}