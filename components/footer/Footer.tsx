import { AppLogo } from "App/components/logo";
import classNames from "classnames";
import Link from "next/link";
import PoweredByMark from "./PoweredByMark";
import SocialLink from "./SocialLink";

export default function Footer() {
  const SocialLinks = () => {
    return (
      <div className={classNames("w-full h-fit", "flex lg:absolute lg:pl-28 justify-between")}>
        <div className={classNames("lg:hidden")}>
          <AppLogo />
        </div>
        <div className={classNames("flex space-x-2")}>
          <SocialLink src="/images/github-mark.svg" srcDark="/images/github-mark-dark.svg" />
          <SocialLink src="/images/github-mark.svg" srcDark="/images/github-mark-dark.svg" />
          <SocialLink src="/images/github-mark.svg" srcDark="/images/github-mark-dark.svg" />
          <SocialLink src="/images/github-mark.svg" srcDark="/images/github-mark-dark.svg" />
        </div>
      </div>
    );
  };

  const SupportLinks = () => {
    return (
      <div className={classNames("lg:hidden", "w-full", "flex space-x-8 justify-center")}>
        <Link href="" className={"text-secondary dark:text-secondary-dark font-semibold"}>
          Docs
        </Link>
        <Link href="" className={"text-secondary dark:text-secondary-dark font-semibold"}>
          Blog
        </Link>
        <Link href="" className={"text-secondary dark:text-secondary-dark font-semibold"}>
          Support
        </Link>
        <Link href="" className={"text-secondary dark:text-secondary-dark font-semibold"}>
          Terms & Conditions
        </Link>
      </div>
    );
  };

  return (
    <div
      className={classNames(
        "bg-el-2 dark:bg-el-2-dark",
        "relative flex justify-center items-center",
        "flex-col lg:flex-row",
        "lg:h-12 lg:px-28 lg:py-2 p-8",
        "space-y-6 lg:space-y-0"
      )}
    >
      <SocialLinks />
      <SupportLinks />
      <PoweredByMark />
    </div>
  );
}
