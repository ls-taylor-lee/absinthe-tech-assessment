import classNames from "classnames";
import { ISingleBadgeProps } from "../types/global";

export function SingleBadge({ badge, optionalClass = "" }: ISingleBadgeProps) {
  return <div className={classNames("", optionalClass)}> Item </div>;
}
