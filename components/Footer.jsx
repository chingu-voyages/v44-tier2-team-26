import React from "react";
import Link from "next/link";
//team
function Footer() {
  return (
    <div className="flex justify-around items-center">
      <div className="w-[30%] text-center">
        <ul>
          <li>Rana Selva</li>
          <li>Keith Petryshyn</li>
        </ul>
      </div>
      <div className="w-[30%] text-center">
        <ul>
          <Link
            href="https://github.com/chingu-voyages/v44-tier2-team-26"
            target="_blank"
          >
            <li>Github link</li>
          </Link>
          <li>Brief Ode to Chingu</li>
        </ul>
      </div>
      <div className="w-[30%] text-center">
        <ul>
          <li>Lee Goullaud</li>
          <li>Gillian Trethewey</li>
          <li>Jeffrey Li</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
