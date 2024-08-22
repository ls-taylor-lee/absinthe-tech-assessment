import classNames from "classnames";
import { IAbsButton } from "../../types/global";

export const AbsButton = ({ handler = () => {}, optionalClass, children, radius = "rounded-full" }: IAbsButton) => {
  return (
    <button className={classNames("bg-el-3 dark:bg-el-3-dark", radius, optionalClass)} onClick={handler}>
      {children}
    </button>
  );
};
