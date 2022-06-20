import React from "react";
import Link from "next/link";

const NavItem = (props) => {
  return (
    <li className="text-2xl font-bold text-black duration-200 ease-in-out hover:text-blue-light">
      <Link href={props.to}>
        <a>{props.children}</a>
      </Link>
    </li>
  );
};

export default NavItem;
