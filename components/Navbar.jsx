"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";

function Navbar() {
  const { data: session, update } = useSession();

  const [showDropdown, setShowDropdown] = useState(false);

  // Polling the session every 1 hour
  useEffect(() => {
    const interval = setInterval(() => update(), 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, [update]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="container max-w-5xl flex items-center flex-wrap justify-between px-8 py-4 mx-auto p-2 lg:p-6">
      <div className="hidden lg:flex items-center gap-2">
        <Link href="/" className="flex items-center" title="Homepage">
          <Image src={"/favicon.ico"} width={32} height={32} alt="Icon" />
          <span className="font-extrabold text-lg ml-2">Trip Plans</span>
        </Link>
      </div>

      <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
        <a className="link link-hover" title="Pricing" href="/#pricing">
          Pricing
        </a>
        <a className="link link-hover" title="FAQ" href="/#faq">
          FAQ
        </a>
        {!session?.user?.image ? (
          <button
            onClick={() => {
              signIn("google");
            }}
            className="btn btn-sm ml-4"
          >
            Login
          </button>
        ) : (
          <Image
            src={session.user?.image}
            width={24}
            height={24}
            alt="User Profile"
            className="w-5 h-5 rounded-xl"
          />
        )}
      </div>

      <div className="lg:hidden w-full mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center" title="Homepage">
            <Image src={"/favicon.ico"} width={32} height={32} alt="Icon" />
            <span className="font-extrabold text-lg ml-2">Trip Plans</span>
          </Link>
        </div>
        <button
          className="flex items-center px-3 py-2 hover:text-black"
          onClick={toggleDropdown}
        >
          <svg
            className="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`${showDropdown ? "block" : "hidden"} lg:hidden w-full mt-2`}
      >
        <div className="text-sm flex flex-col gap-3 py-4">
          <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center lg:w-1/2">
            <a className="link link-hover" title="Pricing" href="/#pricing">
              Pricing
            </a>
            <a className="link link-hover" title="FAQ" href="/#faq">
              FAQ
            </a>
          </div>

          <a title="Pricing" href="/#pricing" className="block mt-2">
            Pricing
          </a>
          <a title="FAQ" href="/#faq" className="block mt-2">
            FAQ
          </a>
        </div>
        <div className="border-b my-4"></div>
        {!session?.user?.image ? (
          <button
            onClick={() => {
              signIn("google");
            }}
            className="w-full btn btn-sm mt-4"
          >
            Login
          </button>
        ) : (
          <div className="flex gap-5 justify-center">
            <Image
              src={session.user?.image}
              width={24}
              height={24}
              alt="User Profile"
              className="w-5 h-5 rounded-xl"
            />
            <span>{session.user?.name}</span>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
