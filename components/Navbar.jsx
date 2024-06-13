import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="container max-w-5xl flex items-center justify-between px-8 py-4 mx-auto">
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
        <a class="link link-hover" title="Pricing" href="/#pricing">
          Pricing
        </a>
        <a class="link link-hover" title="FAQ" href="/#faq">
          FAQ
        </a>
      </div>

      <div className="flex lg:hidden">
        <button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
          <span class="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-base-content"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex w-1/2 justify-end">
        <button class="btn btn-sm">Login</button>
      </div>
    </header>
  );
}

export default Navbar;
