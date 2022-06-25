import React from "react";
import Link from "next/link";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-8 h-64 w-screen bg-white">
      <div className="flex justify-center gap-8 text-lg">
        <Link href="/">
          <a>
            <b>JHSOI</b>
          </a>
        </Link>
        <p>© JHSOI 2022. All rights reserved.</p>
        <Link href="/">
          <a>
            <FaInstagram />
          </a>
        </Link>
        <Link href="mailto: jhso.invite@gmail.com">
          <a>
            <FaEnvelope />
          </a>
        </Link>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
