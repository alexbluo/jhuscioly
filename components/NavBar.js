import React from "react";
import MobileNav from "./MobileNav";
import NavItem from "./NavItem";
import Link from "next/link";
import Image from "next/image";

// TODO: make navbar initially white no border, change on scroll
const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="sm:hidden">
        <MobileNav open={open} setOpen={setOpen} />
      </div>
      <nav className="sticky top-0 z-50 flex h-16 w-screen items-center justify-between border border-b-blue-light bg-white">
        <div className="my-auto ml-2 cursor-pointer gap-2">
          <Link href="/">
            <a className="flex items-center">
              <Image
                src="/jhsoi-logo.png"
                alt="Navigation Bar JHSOI Logo"
                layout="fixed"
                width="64"
                height="64"
              />
              <h1 className="bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text text-4xl font-bold text-transparent">
                JHSOI
              </h1>
            </a>
          </Link>
        </div>

        {/* TODO: need to set open to false when screen is resized */}

        <div
          className={`mr-8 cursor-pointer text-2xl font-bold text-black duration-200 ease-in-out hover:text-blue-light sm:hidden ${
            open ? "text-blue-light" : ""
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          Menu
        </div>
        <ul className="mr-8 hidden gap-8 sm:flex">
          <NavItem to="/">Register</NavItem>
          <NavItem to="/info">Info</NavItem>
          <NavItem to="/updates">Updates</NavItem>
          <NavItem to="/board">Board</NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
