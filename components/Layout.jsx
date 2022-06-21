import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default React.memo(({ children }) => {
  return (
    <>
      <NavBar />
      <main className="container mx-auto min-h-screen px-16 py-8">
        {children}
      </main>
      <Footer />
    </>
  );
});
