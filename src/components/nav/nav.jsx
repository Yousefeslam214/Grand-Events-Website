import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div>
      {" "}
      <nav className="bg-white text-black  p-4 flex sticky justify-center gap-6 sticky top-0 z-10">
        <Link href="/" className=" text-lg font-bold hover:underline">
          Home
        </Link>
        <Link href="/events" className=" text-lg font-bold hover:underline">
          Events
        </Link>
        <Link href="/about" className="text-lg font-bold hover:underline">
          About Us
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
