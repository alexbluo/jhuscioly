import Image from "next/image";
import Link from "next/link";
import MobileNavItems from "./MobileNavItems";
import NavItem from "./NavItem";

// TODO: make navbar initially white no border, change on scroll
export default function NavBar() {
  // i want you to practice with this, just focus on making the mobile nav open/close and enabled on small screens
  // first import the useState hook. this allows the component to keep track of state, like the number on a counter or whether the navbar is open
  // useState returns the state itself and a function to set the state.
  // intilialize the state inside this component. you will likely use array destructuring, which is just syntactic sugar for declaring variables
  // whenever the user clicks the open/close menu button, set the state to the opposite of what it was before
  // show the mobile nav contents if the isOpen state is true. search up conditional rendering. my favorite method is &&, as it's the shortest
  // the rest is googling syntax and guessing css until it looks right.
  // for animations, keep in mind that the first time a component renders, it will run its css animations. css animations only transition from one animatable property to another value of the exact same property.
  // framer motion is intuitively built around that concept
  // feel free to ask any questions

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
            <h1 className="bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text text-4xl font-bold text-transparent">
              JHSOI
            </h1>
          </a>
        </Link>
      </div>

      {/* TODO: need to set open to false when screen is resized */}
      {/* EDIT: this can be done by setting hidden on the menu contents using css */}

      <div className="mr-8 cursor-pointer text-2xl font-bold text-black duration-200 ease-in-out hover:text-blue-light sm:hidden">
        Menu
      </div>
      <ul className="mr-8 hidden gap-8 sm:flex">
        <NavItem to="/">Register</NavItem>
        <NavItem to="/info">Info</NavItem>
        <NavItem to="/updates">Updates</NavItem>
        <NavItem to="/board">Board</NavItem>
      </ul>
      {/* conditionally render MobileNavItems here. dont start too far up */}
    </nav>
  );
}
