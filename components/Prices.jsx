import React from "react";
import Link from "next/link";
import { buyProduct } from "./buyProduct";
import Image from "next/image";

function Prices() {
  return (
    <section className="bg-slate-100 overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-5xl mx-auto">
        <div class="flex flex-col text-center w-full mb-10">
          <div class="mb-4 ">
            <div class="badge animate-bounce whitespace-nowrap badge-primary">
              ✨ Launch discount — 50% OFF ✨
            </div>
          </div>
          <h2 class="max-w-xl font-extrabold text-4xl lg:text-5xl tracking-tight mb-8 mx-auto ">
            Stop wasting hours planning your trips
          </h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          <div className="relative w-full max-w-lg">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <span class="badge text-xs text-white font-medium border-0 bg-emerald-500 whitespace-nowrap">
                Premium ⭐️
              </span>
            </div>

            <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
              <div class="flex flex-wrap gap-2">
                <div class="flex flex-col justify-end mb-[4px] text-lg ">
                  <p class="relative">
                    <span class="absolute bg-base-content h-0.5 inset-x-0 top-[53%]"></span>
                    <span class="text-base-content/80">$50</span>
                  </p>
                </div>
                <p class="text-5xl tracking-tight font-extrabold">$25</p>
                <div class="flex flex-col justify-end mb-[4px]">
                  <p class="text-xs text-base-content/60 uppercase font-semibold">
                    USD
                  </p>
                </div>
              </div>

              <ul class="space-y-2.5 leading-relaxed text-base flex-1">
                <li class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4 opacity-1 fill-emerald-500 shrink"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Access to 3 trips</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4 opacity-1 fill-emerald-500 shrink"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Up to 10 Locations per trip</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4 opacity-1 fill-emerald-500 shrink"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Lifetime Access</span>
                </li>
              </ul>

              <div className="space-y-2">
                <Link
                  href="#buy"
                  role="button"
                  className="btn btn-error group btn-block"
                  title="BUY NOW"
                  onClick={() => {buyProduct("425252")}}
                >
                  BUY NOW
                </Link>
                <p class=" text-sm text-center text-base-content-secondary font-medium relative underline">
                  One-time payment
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-lg">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <span class="badge text-xs text-white font-medium border-0 bg-emerald-500 whitespace-nowrap">
                VIP 🚀
              </span>
            </div>

            <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
              <div class="flex flex-wrap gap-2">
                <div class="flex flex-col justify-end mb-1 text-lg ">
                  <p class="relative">
                    <span class="absolute bg-base-content h-0.5 inset-x-0 top-[53%]"></span>
                    <span class="text-base-content/80">$78</span>
                  </p>
                </div>
                <p class="text-5xl tracking-tight font-extrabold">$39</p>
                <div class="flex flex-col justify-end mb-[4px]">
                  <p class="text-xs text-base-content/60 uppercase font-semibold">
                    USD
                  </p>
                </div>
              </div>

              <ul class="space-y-2.5 leading-relaxed text-base flex-1">
                <li class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4 opacity-1 fill-emerald-500 shrink"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Access to 5 trips</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4 opacity-1 fill-emerald-500 shrink"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Up to 20 Locations per trip</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4 opacity-1 fill-emerald-500 shrink"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Lifetime Access</span>
                </li>
              </ul>

              <div className="space-y-2">
                <Link
                  href="#buy"
                  role="button"
                  className="btn btn-error group btn-block"
                  title="BUY NOW"
                  onClick={() => {buyProduct("425238")}}
                >
                  BUY NOW
                </Link>
                <p class=" text-sm text-center text-base-content-secondary font-medium relative underline">
                  One-time payment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 max-w-md mx-auto mt-16 md:mt-24">
          <div class="rating !flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 text-yellow-500"
            >
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 text-yellow-500"
            >
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 text-yellow-500"
            >
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 text-yellow-500"
            >
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 text-yellow-500"
            >
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>

          <div className="text-base leading-relaxed space-y-2 max-w-md mx-auto text-center">
            <p className="px-1.5">
              TripPlanss made this so easy for me. The site is user-friendly and
              makes planning super simple. I never forget any travel dates or
              details anymore.
            </p>
          </div>

          <div className="flex justify-center items-center gap-3 md:gap-4">
            <Image
              src={"/YifanGoh.webp"}
              width={48}
              height={48}
              alt="YifanGoh"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
            />
            <div>
              <p class="font-semibold">Yifan Goh</p>
              <p class="text-base-content-secondary text-sm">
                7.7K followers on 𝕏
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prices;
