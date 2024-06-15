"use client";

import Link from "next/link";
import { buyProduct } from "./buyProduct";

function Main() {
  return (
    <section className="max-w-5xl mx-auto  flex flex-col items-center justify-center gap-16 lg:gap-20 px-8 py-12 lg:py-32 p-2 lg:p-6">
      <div className="flex flex-col gap-10 lg:gap-12 items-center justify-center text-center">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Don't call it a dream <br />
          Call it a plan
        </h1>
        <p className="text-lg text-base-content-secondary leading-relaxed max-w-md mx-auto">
          Plan your trip easily with all details in one place. <br />
        </p>

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
    </section>
  );
}

export default Main;
