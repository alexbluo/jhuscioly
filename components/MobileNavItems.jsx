import NavItem from "./NavItem";

export default function MobileNavItems() {
  // animations will happen in this file
  return (
    <div className="absolute top-16 left-0 w-screen bg-white">
      <ul className="mr-8 flex-col gap-8 text-center">
        <NavItem to="/">Register</NavItem>
        <NavItem to="/info">Info</NavItem>
        <NavItem to="/updates">Updates</NavItem>
        <NavItem to="/board">Board</NavItem>
      </ul>
    </div>
  );
}
