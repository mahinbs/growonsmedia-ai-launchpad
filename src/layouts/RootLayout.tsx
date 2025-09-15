import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[72px] md:pt-[88px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;