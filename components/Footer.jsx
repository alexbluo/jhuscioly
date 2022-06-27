import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

// TODO: content
function Footer() {
  return (
    <footer className="h-64 w-screen bg-blue-dark p-8 text-sm text-white">
      <div className="flex h-full flex-col">
        <div className="flex h-full justify-between gap-8">
          <div>
            <a>
              <FaInstagram />
            </a>
            <a href="mailto: jhso.invite@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <p>Copyright © 2022 JHSOI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
