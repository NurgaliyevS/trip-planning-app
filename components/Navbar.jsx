import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative z-[99999]">
      <header className="z-10 relative bg-transparent">
        <nav className="container max-w-5xl flex items-center justify-between px-8 py-4 mx-auto">
          <div className="w-1/2 justify-start flex gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0"
              title="Homepage"
            >
              <Image src={"/favicon.ico"} width={32} height={32} alt="Icon" />
              <span className="font-extrabold text-lg">Trip Plans</span>
            </Link>
          </div>

          <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
            <a className="link link-hover" title="Pricing" href="/#pricing">
              Pricing
            </a>
            <a className="link link-hover" title="FAQ" href="/#faq">
              FAQ
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            >
              <span className="sr-only">Open Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-base-content"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex w-1/2 justify-end">
            <button className="btn btn-sm">Login</button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-base-200 z-50 p-8 transform transition-transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            title="Homepage"
          >
            <Image src={"/favicon.ico"} width={32} height={32} alt="Icon" />
            <span className="font-extrabold text-lg">Trip Plans</span>
          </Link>
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="-m-2.5 rounded-md p-2.5"
          >
            <span className="sr-only">Close menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="mt-6">
          <div className="py-4">
            <div className="flex flex-col gap-y-4 items-start">
              <a className="link link-hover" title="Pricing" href="/#pricing">
                Pricing
              </a>
              <a className="link link-hover" title="FAQ" href="/#faq">
                FAQ
              </a>
            </div>
            <div className="border-b my-4"></div>
            <div className="flex flex-col gap-4">
              <button className="btn btn-sm">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
