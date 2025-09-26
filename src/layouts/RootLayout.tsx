import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RootLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-primary/20 to-black via-black">
      {pathname !== "/" && <Header />}
      <main className="flex-grow pt-[3rem]">
      {/* <main className="flex-grow pt-[88px] sm:pt-[104px] md:pt-[128px] lg:pt-[144px]"> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
