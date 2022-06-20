import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NavItem = (props) => {
  return (
    <li className="text-2xl font-bold">
      <Link href={props.to}>
        <a>{props.children}</a>
      </Link>
    </li>
  );
};

export default NavItem;
