import React, { useMemo } from "react";
import Logo from "../logo";
import classNames from "classnames";
import Image from "next/image";
import NavLink from "./NavLink";

export default function Navbar() {
  const navLinks = useMemo(() => {
    return (
      <>
        <NavLink link="/" title="Dashboard" />
        <NavLink link="/tasks" title="Tasks" />
        <NavLink link="/badges" title="Badges" />
        <NavLink link="/leaderboard" title="Leaderboard" />
        <NavLink link="/connections" title="Connections" />
      </>
    );
  }, []);

  const HowItWorks = () => {
    return (
      <div
        className={classNames(
          "hidden lg:block",
          "bg-el-2 dark:bg-el-2-dark",
          "px-4 py-2",
          "border rounded-full border-main-hover dark:border-main-hover-dark",
          "text-sm font-semibold text-secondary dark:text-secondary-dark",
          "cursor-pointer"
        )}
      >
        How It Works
      </div>
    );
  };

  const Account = () => {
    const accountName = "Windi.eth";

    return (
      <div
        className={classNames(
          "bg-el-3 dark:bg-el-3-dark",
          "hover:bg-el-3/70 hover:dark:bg-el-3-dark/70",
          "px-4 py-2 rounded-lg",
          "text-sm font-semibold text-primary dark:text-primary-dark",
          "cursor-pointer",
          "flex items-center"
        )}
      >
        <Image src="/images/profile_logo.jpg" alt="PL" width={18} height={18} className="rounded-full mr-2" />
        <p>{accountName}</p>
      </div>
    );
  };

  const HamburgerMenu = () => {
    return (
      <div className="lg:hidden flex items-center">
        <button id="mobile-menu-button" className="text-gray-200 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div className={classNames("sticky top-0 w-full")}>
      <div
        className={classNames(
          "flex items-center justify-between",
          "lg:h-18 lg:px-28 lg:py-4 p-8",
          "bg-el-2 dark:bg-el-2-dark",
          "lg:bg-el lg:dark:bg-el-dark"
        )}
      >
        <Logo />
        <div className="hidden lg:flex space-x-2 mx-auto flex-grow">{navLinks}</div>
        <div className="flex space-x-2">
          <HowItWorks />
          <Account />
          <HamburgerMenu />
        </div>
      </div>

      <div className="lg:hidden flex px-8 py-4 flex-wrap bg-el dark:bg-el-dark">{navLinks}</div>
    </div>
  );
}
