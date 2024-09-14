import CustomNavbar from "@/components/CustomNavbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <CustomNavbar />
      <Hero />
    </main>
  );
}
