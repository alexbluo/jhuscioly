import NavItem from "./NavItem";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="sticky top-0 flex h-16 w-screen items-center justify-between border border-b-blue-light bg-white">
      <div className="ml-2 flex cursor-pointer items-center gap-2">
        <Link href="/">
          <a className="h-16">
            <Image
              src="/jhsoi-logo.png"
              alt="Navigation Bar JHSOI Logo"
              layout="fixed"
              width="64"
              height="64"
            />
          </a>
        </Link>
        <span className="text-4xl font-bold text-blue-dark">JHSOI</span>
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
