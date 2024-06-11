import { Nunito } from "next/font/google"; // Import Nunito

const nunito = Nunito({ subsets: ["latin"] }); // Initialize Nunito

export default function Home() {
  return (
    <main
      className={`${nunito.variable} flex flex-col min-h-screen p-2 lg:p-6`}
    >
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Don't call it a dream <br />
        </span>
        Call it a plan
      </h1>
    </main>
  );
}
