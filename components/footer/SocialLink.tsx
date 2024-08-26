import classNames from "classnames";

export default function SocialLink({ src, srcDark }) {
  return (
    <div
      className={classNames("h-8 w-8", "rounded-xl", "flex items-center justify-center", "bg-el-3 dark:bg-el-3-dark")}
    >
      <img src={src} alt={src} className="dark:hidden w-4 h-4" />
      <img src={srcDark} alt={src} className="hidden dark:block w-4 h-4" />
    </div>
  );
}
