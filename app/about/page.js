"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function About() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <main>
      {/* Navbar */}
      <nav className="item-blur bg-fixed select-none fixed w-full top-0 z-10">
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
                  <p className="block text-lg py-2 pl-3 pr-4 text-teal-300 rounded md:hover:bg-transparent md:border-0 ease-in duration-200 hover:text-teal-500 dark:hover:text-teal-500 md:p-0 md:dark:hover:bg-transparent">
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
                  <p className="block text-lg py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 ease-in duration-200 hover:text-teal-500 dark:hover:text-teal-500 md:dark:hover:bg-transparent">
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
          About me
        </h1>
      </div>
      <div className="flex justify-center items-center select-none">
        <h1 className="text-white p-3 text-center font-bold mt-3 text-5xl font-poppins">
          Here's my story.
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row mt-14">
        {/* Main text */}
        <h1
          className="p-5 text-left md:ml-11 font-poppins text-xl text-gray-300 select-none"
          style={{ lineHeight: "30pt" }}
        >
          Hey there! I'm Abdul, a fourteen year old{" "}
          <Link className="link" href={"https://github.com/git-Abdul"}>
            developer
          </Link>
          , creative and critical programmer specializing in front end ui
          designs. My aim is to create beautiful ui experiences for the user to
          be emulsified in the design and the product language. As a developer I
          clearly understand a user's needs but I also find a practical and
          definite way to solve the problem being faced. <br />
          <br />
          During the tough times of the COVID-19 Pandemic I was bored and
          willing to do anything to pass time, it was at that time I had gotten
          introduced to coding. The first language I tried out was{" "}
          <Link href={"https://python.org"} className="link">
            Python
          </Link>{" "}
          which is relatively easy for a begginer. Starting out i was eager to
          learn and discover how programmers made ui and applications on an
          operating system. I started learning using the{" "}
          <Link
            href={"https://docs.python.org/3/library/tk.html"}
            className="link"
          >
            Tkinter
          </Link>{" "}
          module and made simple ui applications with simple meanings, I soon
          understood the functionality of Python despite it's simplicity.
          <br />
          <br />
          Some of the projects that I've made can be seen on the{" "}
          <Link href={"/projects"} className="link">
            projects
          </Link>{" "}
          section of this website, although some projects I would truly like to
          mention here is my own discord bot made by using{" "}
          <Link
            href={"https://discordpy.readthedocs.io/en/stable/"}
            className="link"
          >
            Discord.py
          </Link>{" "}
          this bot had taken me months to code by hand and it's code is now{" "}
          <Link
            href={"https://github.com/git-Abdul/krypticBot"}
            className="link"
          >
            open-source
          </Link>{" "}
          for anyone to edit, verify and customize. Just by this time I had also
          started learning <span className="link">HTML, CSS</span> and{" "}
          <span className="link">JavaScript</span>. After seeing the
          potential of the web, I started learning{" "}
          <Link href={"https://react.dev"} className="link">
            React
          </Link>{" "}
          with the{" "}
          <Link href={"https://nextjs.org"} className="link">
            Next.js
          </Link>{" "}
          framework, infact this very website is made using React and Next.js.{" "}Currently I am learning <span className="link">Java</span> that also helps my journey as a JavaScript developer.
          <br />
          <br />
          You can find me on{" "}
          <Link href={"https://github.com/git-Abdul"} className="link">
            Github
          </Link>{" "}
          where I post my recent projects and development ideas for UI/UX
          designs, or you can follow me on my{" "}
          <Link href={"https://instagram.com/abdul.__.r"} className="link">
            Instagram
          </Link>{" "}
          and{" "}
          <Link href={"https://twitter.com/ARtwitrX"} className="link">
            Twitter
          </Link>{" "}
          handles.
        </h1>
      </div>
      <hr class="w-40 h-1 mx-auto my-3 border-0 rounded bg-gray-700"></hr>
      <div className="flex justify-center items-center select-none">
        <h1 className="text-teal-400 uppercase text-center font-bold my-14 text-lg font-bridge">
          Programming languages
        </h1>
      </div>
      {/* SVG Icons */}
      <div className="flex justify-center gap-5 mb-14 select-none">
        <img
          src="icon1.svg"
          alt="Icon 1"
          className="w-8 h-8"
        />
        <img
          src="icon2.svg"
          alt="Icon 2"
          className="w-8 h-8"
        />
        <img
          src="icon3.svg"
          alt="Icon 3"
          className="w-8 h-8"
        />
        <img
          src="icon4.svg"
          alt="Icon 4"
          className="w-8 h-8"
        />
        <img
          src="icon5.svg"
          alt="Icon 5"
          className="w-8 h-8"
        />
      </div>
    </main>
  );
}