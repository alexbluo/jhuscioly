import { AnimatePresence, motion } from "framer-motion";
import NavItem from "./NavItem";

export default function MobileNavItems() {
  // animations will happen in this file
  return (
    <AnimatePresence>
      <motion.div
        className="absolute top-16 left-0 w-screen bg-white sm:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ul className="m-4 flex-col space-y-2 text-center">
          <NavItem to="/">Register</NavItem>
          <NavItem to="/info">Info</NavItem>
          <NavItem to="/updates">Updates</NavItem>
          <NavItem to="/board">Board</NavItem>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}
