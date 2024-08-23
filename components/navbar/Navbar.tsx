import { AppLogo } from "App/components/logo";
import classNames from "classnames";
import { useMemo } from "react";
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
          "hidden xl:block",
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
    const accountName = "Fox.eth";

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
        <img src="/images/profile_logo.jpg" alt="PL" className={classNames("rounded-full mr-2 w-4 h-4")} />
        <p>{accountName}</p>
      </div>
    );
  };

  const HamburgerMenu = () => {
    return (
      <div className="xl:hidden flex items-center">
        <button id="mobile-menu-button" className="text-gray-200 focus:outline-none">
          <svg
            className="w-6 h-6 text-black dark:text-white"
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
    <div className={classNames("sticky top-0 w-full lg:border-b border-el-3 dark:border-el-3-dark z-50")}>
      <div
        className={classNames(
          "flex items-center justify-between",
          "lg:h-18 lg:px-28 lg:py-4 p-8",
          "bg-el-2 dark:bg-el-2-dark",
          "lg:bg-el lg:dark:bg-el-dark"
        )}
      >
        <AppLogo />
        <div className="hidden lg:flex space-x-2 mx-auto flex-grow">{navLinks}</div>
        <div className="flex space-x-2">
          <HowItWorks />
          <Account />
          <HamburgerMenu />
        </div>
      </div>

      <div className={classNames("px-4 pt-6 space-x-8", "bg-el dark:bg-el-dark", "lg:hidden")}>
        <div
          className={classNames(
            "flex flex-wrap items-center",
            "bg-el-2 dark:bg-el-2-dark",
            "px-2 py-2",
            "lg:bg-el lg:dark:bg-el-dark",
            "rounded-3xl"
          )}
        >
          {navLinks}
        </div>
      </div>
    </div>
  );
}
