import { IAbsButton } from "App/types/global";
import classNames from "classnames";

export default function AbsButton({
  handler = () => {},
  optionalClass,
  children,
  radius = "rounded-full",
}: IAbsButton) {
  return (
    <button className={classNames("bg-el-3 dark:bg-el-3-dark", radius, optionalClass)} onClick={handler}>
      {children}
    </button>
  );
}
