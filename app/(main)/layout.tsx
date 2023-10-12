import Navbar from "@/components/Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <Navbar />
      <main className="h-full grow ">{children}</main>
    </div>
  );
}
