import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

// TODO: content
function Footer() {
  return (
    <footer className="bg-blue-dark p-8 text-white">
      <div className="flex flex-col gap-8">
        <div className="flex gap-8 text-xl">
          <a>
            <FaInstagram />
          </a>
          <a href="mailto:jhso.invite@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p>Copyright © 2022 JHSOI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
