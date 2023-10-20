import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/Footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <Navbar />
      <main className="h-full grow">{children}</main>
      <FooterSection />
    </div>
  );
}
