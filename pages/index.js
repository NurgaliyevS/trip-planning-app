import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${nunito.variable} flex flex-col min-h-screen p-2 lg:p-6`}
    >
      <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
        <span>
          Don't call it a dream <br />
        </span>
        <span>Call it a plan</span>
      </h1>
    </main>
  );
}
