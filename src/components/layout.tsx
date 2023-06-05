import Navbar from "./navbar";
import Footer from "./footer";
import React from "react";

interface ParentComponentProps {
  children: React.ReactNode;
}

function Layout({ children }: ParentComponentProps) {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
