import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <main className="container mx-auto min-h-screen px-16 py-8">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default React.memo(Layout);
