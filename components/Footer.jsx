import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-dark p-8 text-white">
      <div className="flex justify-between gap-8">
        <p>© JHSOI 2022</p>
        <div className="flex gap-4 text-xl">
          <a>
            <FaInstagram />
          </a>
          <a href="mailto:jhso.invite@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
