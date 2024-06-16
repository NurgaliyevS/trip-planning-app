"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { buyProduct } from "./buyProduct";

function Navbar() {
  const { data: session } = useSession();

  const [showDropdown, setShowDropdown] = useState(false);

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
        {!session?.user ? (
          <a className="link link-hover" title="Login" href="/api/auth/signin">
            Login
          </a>
        ) : (
          <Image
            src={session.user?.image || "/defaultProfile.png"}
            width={24}
            height={24}
            alt="User Profile"
            className="w-5 h-5 rounded-xl"
          />
        )}
        <Link
          href="#buy"
          role="button"
          className="btn btn-error group"
          title="BUY NOW"
          onClick={buyProduct}
        >
          BUY NOW
        </Link>
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
          {!session?.user ? (
            <a
              className="link link-hover block mt-2"
              title="Login"
              href="/api/auth/signin"
            >
              Login
            </a>
          ) : (
            <Image
              src={session.user?.image || "/defaultProfile.png"}
              width={24}
              height={24}
              alt="User Profile"
              className="w-5 h-5 rounded-xl block mt-2"
            />
          )}
        </div>
        <div className="border-b my-4"></div>

        <div className="flex justify-center items-center">
          <Link
            href="#buy"
            role="button"
            className="btn btn-error group btn-wide"
            title="BUY NOW"
            onClick={buyProduct}
          >
            BUY NOW
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
