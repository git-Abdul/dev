"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ToolBox() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <main>
      {/* Navbar */}
      <nav className="item-blur bg-fixed select-none fixed w-full top-0 z-10">
      <div className= "z-10 bg-fixed fixed item-blur w-full h-[1.3px] bg-gradient-to-r from-transparent via-teal-500 to-transparent"/>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-6">
          <Link className="flex items-center" href={"/"}>
            <img src="logo.png" class="md:h-16 h-12" alt="logo-svg" />
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
                  <p className="block text-lg py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 ease-in duration-200 hover:text-teal-500 dark:hover:text-teal-500 md:dark:hover:bg-transparent">
                    Projects
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/toolbox"}>
                  <p className="block text-lg py-2 pl-3 pr-4 text-teal-300 rounded md:hover:bg-transparent md:border-0 md:p-0 ease-in duration-200 hover:text-teal-500 dark:hover:text-teal-500 md:dark:hover:bg-transparent">
                    Toolbox
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
          Toolbox
        </h1>
      </div>
      <div className="flex justify-center items-center select-none">
        <h1 className="text-white p-3 text-center font-bold mt-3 text-5xl font-poppins">
          Software I use everyday.
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row mt-14"></div>
      <div className="md:ml-20 ml-10 select-none">
        <h1 className="text-3xl font-poppins font-semibold">Software</h1>
      </div>
      {/*Tool box grid*/}
      <div class="mx-auto w-full max-w-screen-xl md:px-20 p-5 select-none">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 class="text-2xl font-semibold text-white">Spotify</h2>
            <h2 className="mb-6 text-gray-300 text-sm mt-1">#music</h2>
            <ul class="text-gray-400 font-medium">
              <li>
                I know Spotify has many ads, but I really enjoy this music streaming service.
              </li>
              <li className="mb-4 mt-2 text-lg link hover:text-teal-400">
                <a href="https://spotify.com">Check it out!</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-white">Notion</h2>
            <h2 className="mb-6 text-gray-300 text-sm mt-1">#application #coding #productivity</h2>
            <ul class="text-gray-400 font-medium">
              <li>
                Notion helps me plan out my workflow and focus on the most important tasks.
              </li>
              <li className="mb-4 mt-2 text-lg link hover:text-teal-400">
                <a href="https://notion.so">Check it out!</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-white">Prettier</h2>
            <h2 className="mb-6 text-gray-300 text-sm mt-1">#extension #coding</h2>
            <ul class="text-gray-400 font-medium">
              <li>
                An opinionated code formatter.
              </li>
              <li className="mb-4 mt-2 text-lg link hover:text-teal-400">
                <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">Check it out!</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-white">Fluent Theme for VS Code</h2>
            <h2 className="mb-6 text-gray-300 text-sm mt-1">#extension #coding</h2>
            <ul class="text-gray-400 font-medium">
              <li>
                This theme adds a fluent Windows 11 look to VS Code.
              </li>
              <li className="mb-4 mt-2 text-lg link hover:text-teal-400">
                <a href="https://spotify.com">Check it out!</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-white">VS Code</h2>
            <h2 className="mb-6 text-gray-300 text-sm mt-1">#coding #application</h2>
            <ul class="text-gray-400 font-medium">
              <li>
                My code editor of choice. I’ve tried all the others out there - VSCode just works best for me!
              </li>
              <li className="mb-4 mt-2 text-lg link hover:text-teal-400">
                <a href="https://code.visualstudio.com">Check it out!</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-white">TailwindCSS IntelliSense</h2>
            <h2 className="mb-6 text-gray-300 text-sm mt-1">#coding #extension</h2>
            <ul class="text-gray-400 font-medium">
              <li>
                Intelligent TailwindCSS tooling for VSCode.
              </li>
              <li className="mb-4 mt-2 text-lg link hover:text-teal-400">
                <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">Check it out!</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-white">Ariake Dark theme for VSCode</h2>
            <h2 className="mb-6 text-gray-300 text-sm mt-1">#coding #appearance</h2>
            <ul class="text-gray-400 font-medium">
              <li>
                A VSCode theme by wart
              </li>
              <li className="mb-4 mt-2 text-lg link hover:text-teal-400">
                <a href="https://marketplace.visualstudio.com/items?itemName=wart.ariake-dark">Check it out!</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-white">Figma</h2>
            <h2 className="mb-6 text-gray-300 text-sm mt-1">#coding #appearance #application</h2>
            <ul class="text-gray-400 font-medium">
              <li>
                Best place to build UI/UX designs for fun and for the web.
              </li>
              <li className="mb-4 mt-2 text-lg link hover:text-teal-400">
                <a href="https://figma.com">Check it out!</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*This site*/}
      <div className="md:ml-20 ml-10 select-none">
        <h1 className="text-3xl font-poppins font-semibold">This Site & Server</h1>
      </div>
      <div class="mx-auto w-full max-w-screen-xl md:px-20 p-5 select-none">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 class="text-2xl font-semibold text-white">Next.js</h2>
            <h2 className="mb-6 text-gray-300 text-sm mt-1">#framework #coding</h2>
            <ul class="text-gray-400 font-medium">
              <li>
              This site is built with Next.js. All of the pages on my site are either statically generated at build time, or incrementally regenerate to fetch new data.
              </li>
              <li className="mb-4 mt-2 text-lg link hover:text-teal-400">
                <a href="https://nextjs.org">Check it out!</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-white">TailwindCSS</h2>
            <h2 className="mb-6 text-gray-300 text-sm mt-1">#coding #appearance</h2>
            <ul class="text-gray-400 font-medium">
              <li>
              A utility-first CSS framework packed with pre-built classes that can be composed to build any design, directly in your markup.
              </li>
              <li className="mb-4 mt-2 text-lg link hover:text-teal-400">
                <a href="https://tailwindcss.com">Check it out!</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-white">Github Pages</h2>
            <h2 className="mb-6 text-gray-300 text-sm mt-1">#extension #coding</h2>
            <ul class="text-gray-400 font-medium">
              <li>
                A easy to use free react webserver where I can host my website in a few clicks.
              </li>
              <li className="mb-4 mt-2 text-lg link hover:text-teal-400">
                <a href="https://github.io">Check it out!</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-white">Icons8</h2>
            <h2 className="mb-6 text-gray-300 text-sm mt-1">#icons</h2>
            <ul class="text-gray-400 font-medium">
              <li>
                A beautiful, vibrant and diverse icon library.
              </li>
              <li className="mb-4 mt-2 text-lg link hover:text-teal-400">
                <a href="https://icons8.com">Check it out!</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="w-40 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>

    </main>
  );
}