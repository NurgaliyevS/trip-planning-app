import { Nunito } from "next/font/google";
import GoogleButton from "@/components/google-button";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${nunito.variable} flex flex-col min-h-screen p-2 lg:p-6`}
    >
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
          <span>
            Don't call it a dream <br />
          </span>
          <span>Call it a plan</span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Plan your trip easily with all details in one place. <br />
          Keep track of cities, dates, times, and notes.
        </p>
      </div>

      <GoogleButton />
    </main>
  );
}
