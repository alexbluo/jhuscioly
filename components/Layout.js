import React from "react";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto min-h-screen px-8 py-16">
        {props.children}
      </div>
    </>
  );
};

export default React.memo(Layout);
