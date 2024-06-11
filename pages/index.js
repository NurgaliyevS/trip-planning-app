import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${nunito.variable} flex flex-col min-h-screen p-2 lg:p-6`}>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
        <span className="text-green-500">
          Don't call it a dream <br />
        </span>
        <span className="text-cyan-500">
          Call it a plan
        </span>
      </h1>
    </main>
  );
}
