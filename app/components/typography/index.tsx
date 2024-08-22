import classNames from "classnames";
import { ISectionTitle } from "../../types/global";

export function SectionTitle({ children }: ISectionTitle) {
  return (
    <p className={classNames("text-secondary dark:text-secondary-dark", "font-medium text-base", "mb-4")}>{children}</p>
  );
}
