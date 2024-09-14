import CustomNavbar from "@/components/CustomNavbar";
import Hero from "@/components/Hero";
import QuickStart from "@/components/QuickStart";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <CustomNavbar />
      <Hero />
      <QuickStart />
    </main>
  );
}
