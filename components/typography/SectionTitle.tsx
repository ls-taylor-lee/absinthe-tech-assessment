import { ISectionTitle } from "App/types/global";
import classNames from "classnames";

export default function SectionTitle({ children }: ISectionTitle) {
  return (
    <p className={classNames("text-secondary dark:text-secondary-dark", "font-medium text-base", "mb-4")}>{children}</p>
  );
}
