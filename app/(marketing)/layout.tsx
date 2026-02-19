import "../globals.css";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";


export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
