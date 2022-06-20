import NavItem from "./NavItem";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
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
            <h1 className="text-4xl font-bold text-blue-dark">JHSOI</h1>
          </a>
        </Link>
      </div>
      <ul className="mr-8 flex gap-8">
        <NavItem to="/info">Info</NavItem>
        <NavItem to="/updates">Updates</NavItem>
        <NavItem to="/board">Board</NavItem>
      </ul>
    </nav>
  );
};

export default NavBar;
