import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ArrowUp } from "lucide-react";
import { useEffect, useRef } from "react";
// import { Footer } from "./Footer";

export const Layout = () => {
  const toTopBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 60) {
        toTopBtnRef.current?.classList.remove("hidden");
        setTimeout(() => {
          toTopBtnRef.current?.classList.remove("opacity-0");
        }, 200);
      } else {
        toTopBtnRef.current?.classList.add("opacity-0");
        setTimeout(() => {
          toTopBtnRef.current?.classList.add("hidden");
        }, 200);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <button
        type="button"
        className="fixed bottom-4 right-4 size-12 rounded-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center duration-200"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        ref={toTopBtnRef}
      >
        <ArrowUp color="white" />
      </button>
      {/* <Footer /> */}
    </>
  );
};
