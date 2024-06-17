import { Nunito } from "next/font/google";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Ads from "@/components/Ads";
import Core from "@/components/Core";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${nunito.className} flex flex-col min-h-screen mx-auto`}
    >
      <Navbar />
      <Main />
      <Ads />
      <Core />
    </main>
  );
}
