import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between h-[100vh] bg-[rgb(244,245,247)]">
      <header>
        <Header />
      </header>
      {/* <main> */}
      <Outlet />
      {/* </main> */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
