import { Nunito } from "next/font/google";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Ads from "@/components/Ads";
import Prices from "@/components/Prices";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import TripPlanner from "@/components/TripPlanner";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${nunito.className} flex flex-col min-h-screen mx-auto`} id="buy"
    >
      <Navbar />
      <Main />
      <Ads />
      <TripPlanner />
      <Prices />
      <FAQ />
      <Footer />
    </main>
  );
}
