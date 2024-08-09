"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-amber-500 rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-200`}
        />
        <div
          className={`w-6 h-1 bg-amber-500 rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-200`}
        />
        <div
          className={`w-6 h-1 bg-amber-500 rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-200`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10 text-amber-500">
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/" className="">
            Friends
          </Link>
          <Link href="/" className="">
            Groups
          </Link>
          <Link href="/" className="">
            Stories
          </Link>
          <Link href="/" className="">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
