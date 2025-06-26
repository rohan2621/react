import React from "react";

const Navbar = ({handleOpen}) => {
  return (
    <nav className="bg-gray-800 w-full h-13 flex text-center justify-around items-center">
      <h1 className="font-semibold text-3xl">React</h1>
      <ul className="flex list-none gap-4">
        <button onClick={handleOpen} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-sans">New Post </button>
      </ul>
    </nav>
  );
};

export default Navbar;
