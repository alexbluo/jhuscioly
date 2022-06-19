import NavItem from "./NavItem";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="fixed top-0 flex h-16 w-screen items-center justify-between">
      <div className="ml-2 flex cursor-pointer items-center gap-2">
        <Link href="/">
          <Image
            src="/jhsoi-logo.png"
            alt="JHSOI Logo"
            layout="fixed"
            width="64"
            height="64"
          />
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
