import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 w-full h-13 flex text-center justify-around items-center">
      <h1 className="font-semibold text-3xl">React</h1>
      <ul className="flex list-none gap-4">
        <li className="hover:cursor-pointer  hover:font-medium">
            Home
        </li>
        <li className="hover:cursor-pointer  hover:font-medium">
          About
        </li>
        <li className="hover:cursor-pointer" hover:font-medium>
          Contacts
        </li>
        <li className="hover:cursor-pointer  hover:font-medium">
          Downloads
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
