"use client";

import Link from "next/link";
import { buyProduct } from "./buyProduct";
import Image from "next/image";
import { useSession } from "next-auth/react";

function Main() {
  const { data: session } = useSession();
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

        <ul className="hidden md:block text-base-content-secondary leading-relaxed space-y-1">
          <li className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              class="w-5 h-5 opacity-1 fill-emerald-500"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Always be ready
          </li>
          <li className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              class="w-5 h-5 opacity-1 fill-emerald-500"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Plan like a pro
          </li>
          <li className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              class="w-5 h-5 opacity-1 fill-emerald-500"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            One app, all trips
          </li>
        </ul>

        <Link
          href="#buy"
          role="button"
          className="btn btn-error group btn-wide"
          title="BUY NOW"
          onClick={() => {
            buyProduct(session?.user?.email, session?.user?.id);
          }}
        >
          BUY NOW
        </Link>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-3">
          <div className="-space-x-5 avatar-group justy-start">
            <div className="avatar w-12 h-12">
              <Image
                src="/Desmond.webp"
                width={50}
                height={50}
                alt="Desmond"
                priority
              />
            </div>
            <div className="avatar w-12 h-12">
              <Image
                src="/Hossein.webp"
                width={50}
                height={50}
                alt="Hossein"
                priority
              />
            </div>
            <div className="avatar w-12 h-12">
              <Image
                src="/Cristian.webp"
                width={50}
                height={50}
                alt="Cristian"
                priority
              />
            </div>
            <div className="avatar w-12 h-12">
              <Image
                src="/Nika.webp"
                width={50}
                height={50}
                alt="Nika"
                priority
              />
            </div>
            <div className="avatar w-12 h-12">
              <Image
                src="/profile.webp"
                width={50}
                height={50}
                alt="Sabyr"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center md:items-start gap-1">
            <div class="rating">
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
            <div className="text-base text-base-content/80">
              <p className="subpixel-antialiased">Never stress over trips</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
