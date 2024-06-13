import { Nunito } from "next/font/google";
import GoogleButton from "@/components/GoogleButton";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${nunito.className} flex flex-col min-h-screen p-2 lg:p-6 mx-auto`}
    >
      <Navbar />
      <Main />
    </main>
  );
}
