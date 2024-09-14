import BestMarkets from "@/components/BestMarkets";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import QuickStart from "@/components/QuickStart";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <CustomNavbar />
      <Hero />
      <QuickStart />
      <BestMarkets />
      <Footer />
    </main>
  );
}
