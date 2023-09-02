"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Resume() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <main>
      {/* Navbar */}
      <nav className="item-blur bg-fixed select-none fixed w-full top-0 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-6">
          <a href="#" className="flex items-center">
            <img src="logo.png" class="md:h-16 h-12" alt="logo-svg" />
          </a>
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
                  <p className="block text-lg py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 ease-in duration-200 hover:text-teal-500 dark:hover:text-teal-500 md:dark:hover:bg-transparent">
                    Projects
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Rays */}
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
          Resume
        </h1>
      </div>
      <div className="flex justify-center items-center select-none">
        <h1 className="text-white p-3 text-center font-bold mt-3 text-5xl font-poppins">
          Hey I'm just fourteen...
        </h1>
      </div>
      <div className="flex justify-center items-center select-none">
        <img src="thinking.png" className="my-20 w-96 h-96"/>
      </div>
      <footer class="rounded-lg shadow m-4 bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm sm:text-center text-gray-400">Hey here's some other goodies:
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href={"/toolbox"} class="mr-4 hover:underline md:mr-6 ">Toolbox</Link>
            </li>
            <li>
              <Link href={"/resume"} class="mr-4 hover:underline md:mr-6 ">Resume</Link>
            </li>
            <li>
              <Link href={"LICENSE.md"} class="mr-4 hover:underline md:mr-6 ">Legal</Link>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}