"use client";

import React, { useState } from "react";
import Link from "next/link";

import "./fonts.css";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <main>
      {/* Navbar */}
      <nav className="font-bridge item-blur uppercase bg-fixed select-none fixed w-full top-0 z-10">
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
                    className="block text-md py-2 pl-3 pr-4 text-teal-300 rounded md:bg-transparent md:p-0 ease-in duration-200 hover:text-teal-500 dark:hover:text-teal-500"
                    aria-current="page"
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <p className="block text-md py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 ease-in duration-200 hover:text-teal-500 dark:hover:text-teal-500 md:p-0 md:dark:hover:bg-transparent">
                    About
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/projects"}>
                  <p className="block text-md py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 ease-in duration-200 hover:text-teal-500 dark:hover:text-teal-500 md:dark:hover:bg-transparent">
                    Projects
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/toolbox"}>
                  <p className="block text-md py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 ease-in duration-200 hover:text-teal-500 dark:hover:text-teal-500 md:dark:hover:bg-transparent">
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
      {/*Main heading and image*/}
      <div className="flex flex-col md:flex-row justify-center items-center md:mt-32 mt-20">
        <p
          className="font-poppins text-white font-bold md:text-left text-center mt-10 md:w-3/4 md:text-5xl text-3xl select-none md:ml-10"
          style={{ padding: 30 }}
        >
          I'm <span className="text-teal-300">Abdul</span>, frontend developer and Python enthusiast.
        </p>
        <Image
          src="main.svg"
          alt="svg"
          width="450"
          height="300"
          loading="lazy"
          className="svg"
        />
      </div>
      <div className="select-none flex md:justify-normal md:ml-16 justify-center">
        <h1 className="text-teal-400 uppercase text-center font-bold my-2 text-lg font-bridge">
          Tech stack
        </h1>
      </div>
      <div className="flex md:justify-normal md:ml-16 justify-center gap-5 mb-14 select-none">
        <a href="https://python.org" target="_blank" rel="noopener noreferrer">
          <img
            src="icon1.svg"
            alt="Icon 1"
            className="w-8 h-8"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src="icon2.svg"
            alt="Icon 2"
            className="w-8 h-8"
          />
        </a>
        <a href="">
          <img
            src="icon3.svg"
            alt="Icon 3"
            className="w-8 h-8"
          />
        </a>
        <a href="">
          <img
            src="icon4.svg"
            alt="Icon 4"
            className="w-8 h-8"
          />
        </a>
        <a href="https://java.com" target="_blank" rel="noopener noreferrer">
          <img
            src="icon5.svg"
            alt="Icon 5"
            className="w-8 h-8"
          />
        </a>
      </div>
      <div className="flex justify-center items-center my-10">
        <Link href={"/about"}>
          <button className="flex justify-normal gap-2 text-zinc-900 bg-teal-400 transition hover:scale-110 hover:-translate-y-2 text-lg duration-300 px-5 py-3 font-semibold font-poppins rounded-md">
            <p>More about me</p>
            <p className="font-bold mt-2"><ArrowRightIcon /></p>
          </button>
        </Link>
      </div>
      <hr class="w-40 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
    </main>
  );
}