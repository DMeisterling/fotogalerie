"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  window
    .matchMedia("(orientation: portrait)")
    .addEventListener("change", (e) => {
      setNav(false);
    });

  return (
    <div className="flex flex-col ontop justify-between items-center w-full h-12 px-3 pt-2 text-gray-900 bg-slate-200 dark:text-white dark:bg-gray-900 fixed border-b-4 border-emerald-500">
      <div className=""></div>
      <ul className="hidden landscape:flex md:flex justify-center items-center">
        <button className="px-3 cursor-pointer capitalize font-bold dark:text-white hover:scale-105 duration-200 text-xl">
          Upload new Photo
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
