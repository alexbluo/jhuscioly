import React from "react";
import { useCycle } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MobileMenuItems from "./MobileMenuItems";
import MobileMenuToggle from "./MobileMenuToggle";
import NavItem from "./NavItem";

function NavBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <nav className="flex h-16 w-screen items-center justify-between bg-white">
      <header className="ml-2 h-full cursor-pointer gap-2">
        <Link href="/">
          <a>
            <div className="relative aspect-square h-full">
              <Image
                src="/jhsoi-logo.png"
                alt="Navigation Bar JHSOI Logo"
                layout="fill"
              />
            </div>
          </a>
        </Link>
      </header>

      <div className="mr-8">
        <MobileMenuToggle open={isOpen} handleClick={() => toggleOpen()} />
      </div>

      <ul className="mr-8 hidden gap-8 sm:flex">
        <NavItem to="/">Register</NavItem>
        <NavItem to="/info">Info</NavItem>
        <NavItem to="/updates">Updates</NavItem>
        <NavItem to="/board">Board</NavItem>
      </ul>
      {isOpen && <MobileMenuItems open={isOpen} />}
    </nav>
  );
}

export default React.memo(NavBar);
